import { CreateProductionReceiptInput } from '@/modules/production-receipt/dto/create-production-receipt.input';
import { UpdateProductionReceiptInput } from '@/modules/production-receipt/dto/update-production-receipt.input';
import { ProductionReceiptProvider } from '@/modules/production-receipt/providers/production-receipt.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductionReceiptService {
  constructor(
    /**
     * inject productionReceiptProvider
     */
    private readonly productionReceiptProvider: ProductionReceiptProvider
  ) {}

  async create(createProductionReceiptInput: CreateProductionReceiptInput) {
    return await this.productionReceiptProvider.create(
      createProductionReceiptInput
    );
  }
  async update(updateProductionReceiptInput: UpdateProductionReceiptInput) {
    return await this.productionReceiptProvider.update(
      updateProductionReceiptInput
    );
  }

  async delete(id: number) {
    return await this.productionReceiptProvider.delete(id);
  }
}
