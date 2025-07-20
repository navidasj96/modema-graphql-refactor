import { PrintItemTagListInput } from '@/modules/invoice-product-item/dto/print-item-tag-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import {
  INVOICE_STATUSES_AFTER_PRODUCTION_START,
  InvoiceStatusEnum,
} from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PrintItemTagProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem> // Replace 'any' with the actual type of the repository
  ) {}

  async itemsList(printItemTagListInput: PrintItemTagListInput) {
    const { filterType } = printItemTagListInput;
    // Build the base query with joins
    let query = this.invoiceProductItemRepository
      .createQueryBuilder('invoiceProductItem')
      //   .select([
      //     'invoiceProductItem',
      //     'invoiceProductItemInvoiceProductStatus.createdAt AS statusCreatedAt',
      //     'invoiceProduct.id AS invoiceProductId',
      //     'invoice.id AS invoiceId',
      //     'invoiceAddress.id AS invoiceAddressId',
      //     'country.id AS countryId',
      //     'state.id AS stateId',
      //     'city.id AS cityId',
      //     'product.id AS productId',
      //     'subproduct.id AS subproductId',
      //     'basicCarpetSize.id AS basicCarpetSizeId',
      //     'basicCarpetColor.id AS basicCarpetColorId',
      //     'invoiceProductStatus.id AS invoiceProductStatusId',
      //   ])
      .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('invoice.invoiceAddress', 'invoiceAddress')
      .innerJoin('invoiceAddress.country', 'country')
      .innerJoin('invoiceAddress.state', 'state')
      .innerJoin('invoiceAddress.city', 'city')
      .innerJoin('invoiceProduct.product', 'product')
      .innerJoin('invoiceProduct.subproduct', 'subproduct')
      .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoin('subproduct.basicCarpetColor', 'basicCarpetColor')
      .innerJoin('invoiceProductItem.currentStatus', 'invoiceProductStatus')
      .leftJoin(
        'invoiceProductItemInvoiceProductStatus',
        'invoiceProductItemInvoiceProductStatus',
        'invoiceProductItem.id = invoiceProductItemInvoiceProductStatus.invoiceProductItemId AND invoiceProductItem.currentStatusId = invoiceProductItemInvoiceProductStatus.invoiceProductStatusId'
      )
      .where('invoiceProductItem.isTagPrinted = :isTagPrinted', {
        isTagPrinted: 0,
      })
      .andWhere('invoice.currentInvoiceStatusId IN (:...invoiceStatuses)', {
        invoiceStatuses: [INVOICE_STATUSES_AFTER_PRODUCTION_START], // Adjust as needed
      })
      .groupBy('invoiceProductItem.id');

    // Filter based on invoice type
    if (filterType) {
      switch (filterType) {
        case 1: // ALL
          break;
        case 2: // FROM_DEPOT
          query = query
            .andWhere('invoiceProductItem.fromDepot = :fromDepot', {
              fromDepot: 1,
            })
            .andWhere('invoiceProductItem.isReversed = :isReversed', {
              isReversed: 0,
            });
          break;
        case 3: // DAMAGED
          query = query.andWhere(
            'substring(invoiceProductItem.code, 1, 1) = :code',
            { code: 'm' }
          );
          break;
        case 4: // REVERSED_ITEMS
          query = query.andWhere(
            'invoiceProductItem.isReversed = :isReversed',
            { isReversed: 1 }
          );
          break;
      }
    }
    const invoiceProdi;
    // Execute the query
    return await query.getRawMany();
  }
}
