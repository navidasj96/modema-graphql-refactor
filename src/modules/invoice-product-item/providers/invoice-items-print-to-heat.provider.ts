import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { InvoiceItemsPrintToHeatListInput } from '@/modules/invoice-product-item/dto/invoice-items-print-to-heat-list.input';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { INVOICE_STATUSES_AFTER_PRODUCTION_START } from '@/utils/invoice-status';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceItemsPrintToHeatProvider {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>
  ) {}

  async invoiceItemsPrintToHeatList(
    invoiceItemsPrintToHeatListInput: InvoiceItemsPrintToHeatListInput
  ) {
    const { printRipId, productionRollId } = invoiceItemsPrintToHeatListInput;

    let heatItems: InvoiceProductItem[] = [];
    let ripItems: InvoiceProductItem[] = [];

    if (printRipId) {
      const invoiceProductRipItems = await this.invoiceProductItemRepository
        .createQueryBuilder('invoiceProductItem')
        .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
        .innerJoin('invoiceProduct.invoice', 'invoice')
        .innerJoin('invoiceProduct.product', 'product')
        .where('invoice.currentInvoiceStatusId IN (:...statuses)', {
          statuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
        })
        .andWhere('invoiceProductItem.currentStatusId = :currentStatus', {
          currentStatus: InvoiceProductStatusEnum.PRINT,
        })
        .andWhere('invoiceProductItem.printRipId = :printRipId', {
          printRipId,
        })
        .andWhere('product.isShaggy = :isShaggy', { isShaggy: 0 })
        .orderBy('invoiceProductItem.sortOrder', 'ASC')
        .addOrderBy('invoiceProductItem.id', 'ASC')
        .getMany();

      ripItems = invoiceProductRipItems;
    }

    if (productionRollId) {
      const invoiceProductHeatItems = await this.invoiceProductItemRepository
        .createQueryBuilder('invoiceProductItem')
        .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')
        .innerJoin('invoiceProduct.invoice', 'invoice')
        .innerJoin('invoiceProduct.product', 'product')
        .where('invoice.currentInvoiceStatusId IN (:...statuses)', {
          statuses: INVOICE_STATUSES_AFTER_PRODUCTION_START,
        })
        .andWhere('invoiceProductItem.currentStatusId = :currentStatus', {
          currentStatus: InvoiceProductStatusEnum.HEAT,
        })
        .andWhere('invoiceProductItem.productionRollId = :productionRollId', {
          productionRollId,
        })
        .andWhere('product.isShaggy = :isShaggy', { isShaggy: 0 })
        .orderBy('invoiceProductItem.tagSortOrder', 'ASC')
        .getMany();
      heatItems = invoiceProductHeatItems;
    }

    return {
      ripItems,
      heatItems,
    };
  }

  async moveBackInvoiceItemToPrint(
    context: { req: UserContext },
    itemId: number
  ) {
    const {
      req: {
        user: { sub },
      },
    } = context;
  }
}
