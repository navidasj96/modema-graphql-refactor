import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RollsReportProductionProvider {
  constructor(
    /**
     * invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>
  ) {}

  async rollsReportProductionList(productionRollId: number) {
    return await this.invoiceProductItemRepository
      .createQueryBuilder('ipi')
      .select([
        'ipi.id',
        'currentStatus.id',
        'productionRoll.id',
        'productionRoll.rollNumber',
        'currentStatus.status',
        'invoiceProduct.id',
        'invoice.id',
        'invoice.invoiceNumber',
        'invoiceMode.id',
        'invoiceMode.name',
        'user.id',
        'user.name',
        'product.id',
        'product.name',
        'subproduct.id',
        'subproduct.name',
        'basicCarpetColor.id',
        'basicCarpetColor.title',
        'basicCarpetSize.id',
        'basicCarpetSize.title',
      ])
      .innerJoin('ipi.currentStatus', 'currentStatus')
      .innerJoin('ipi.productionRoll', 'productionRoll')
      .innerJoin('ipi.invoiceProduct', 'invoiceProduct')
      .innerJoin('invoiceProduct.invoice', 'invoice')
      .innerJoin('invoice.invoiceMode', 'invoiceMode')
      .innerJoin('invoice.user', 'user')
      .innerJoin('invoiceProduct.product', 'product')
      .innerJoin('invoiceProduct.subproduct', 'subproduct')
      .innerJoin('subproduct.basicCarpetColor', 'basicCarpetColor')
      .innerJoin('subproduct.basicCarpetSize', 'basicCarpetSize')
      .where('ipi.productionRollId = :productionRollId', { productionRollId })
      .getMany();
  }
}
