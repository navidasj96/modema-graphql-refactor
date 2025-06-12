import { Injectable } from '@nestjs/common';
import { CreateOutOfStockButListedProductInput } from './dto/create-out-of-stock-but-listed-product.input';
import { UpdateOutOfStockButListedProductInput } from './dto/update-out-of-stock-but-listed-product.input';

@Injectable()
export class OutOfStockButListedProductService {
  create(
    createOutOfStockButListedProductInput: CreateOutOfStockButListedProductInput
  ) {
    return 'This action adds a new outOfStockButListedProduct';
  }

  findAll() {
    return `This action returns all outOfStockButListedProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} outOfStockButListedProduct`;
  }

  update(
    id: number,
    updateOutOfStockButListedProductInput: UpdateOutOfStockButListedProductInput
  ) {
    return `This action updates a #${id} outOfStockButListedProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} outOfStockButListedProduct`;
  }
}
