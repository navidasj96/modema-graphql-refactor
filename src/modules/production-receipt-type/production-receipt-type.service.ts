import { Injectable } from '@nestjs/common';
import { CreateProductionReceiptTypeInput } from './dto/create-production-receipt-type.input';
import { UpdateProductionReceiptTypeInput } from './dto/update-production-receipt-type.input';

@Injectable()
export class ProductionReceiptTypeService {
  create(createProductionReceiptTypeInput: CreateProductionReceiptTypeInput) {
    return 'This action adds a new productionReceiptType';
  }

  findAll() {
    return `This action returns all productionReceiptType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productionReceiptType`;
  }

  update(id: number, updateProductionReceiptTypeInput: UpdateProductionReceiptTypeInput) {
    return `This action updates a #${id} productionReceiptType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productionReceiptType`;
  }
}
