import { RollsReportListInput } from '@/modules/invoice-product-item/dto/rolls-report-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class RollsReportProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>
  ) {}

  async rollsReportList(rollsReportListInput: RollsReportListInput) {
    const { limit, offset, search } = rollsReportListInput;

    const invoiceProductItems = this.invoiceProductItemRepository
      .createQueryBuilder('invoiceProductItem')
      .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('invoice.invoiceAddresses', 'invoiceAddress')
      .innerJoin('invoiceAddress.country', 'country')
      .innerJoin('invoiceAddress.state', 'state')
      .innerJoin('invoiceAddress.city', 'city')
      .innerJoin('invoiceProduct.product', 'product')
      .innerJoin('invoiceProduct.subproduct', 'subproduct')
      .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoin('subproduct.basicCarpetColor', 'basicCarpetColor')
      .innerJoin(
        'invoiceProductItem.invoiceProductItemInvoiceProductStatuses',
        'invoiceProductStatus'
      )
      .innerJoin('invoiceProductItem.productionRoll', 'productionRoll')
      .leftJoin(
        'invoiceProductItem.invoiceProductItemInvoiceProductStatuses',
        'invoiceProductItemStatus',
        'invoiceProductItemStatus.invoiceProductItemId = invoiceProductItem.id AND invoiceProductItemStatus.invoiceProductStatusId = invoiceProductItem.currentStatusId'
      )
      .leftJoin('invoiceProductItem.printProfile', 'printProfile')
      .where(
        new Brackets((qb) => {
          qb.where('invoiceProductItem.isTagPrinted = true').orWhere(
            'invoiceProductItem.isTagPrinted IS NULL'
          );
        })
      )
      .andWhere('invoice.currentInvoiceStatusId IN (:...allowedStatuses)', {
        allowedStatuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
      })
      .andWhere('invoiceProductItem.productionRollId IS NOT NULL')
      .skip(offset)
      .take(limit)
      .groupBy('productionRoll.id');

    if (search && search.length > 0) {
      const sanitizedSearch = search?.replace(/\//g, '');

      invoiceProductItems.andWhere(
        new Brackets((qb) => {
          qb.where('rollReferenceCode ILIKE :search', {
            search: `%${sanitizedSearch}%`,
          }).orWhere('productionRoll.rollNumber ILIKE :search', {
            search: `%${sanitizedSearch}%`,
          });
        })
      );
    }

    const result = await invoiceProductItems.getManyAndCount();
    return result;
  }
}
