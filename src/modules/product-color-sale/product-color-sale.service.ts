import { Injectable } from '@nestjs/common';
import { CreateProductColorSaleInput } from './dto/create-product-color-sale.input';
import { UpdateProductColorSaleInput } from './dto/update-product-color-sale.input';

@Injectable()
export class ProductColorSaleService {
  create(createProductColorSaleInput: CreateProductColorSaleInput) {
    return 'This action adds a new productColorSale';
  }

  findAll() {
    return `This action returns all productColorSale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productColorSale`;
  }

  update(id: number, updateProductColorSaleInput: UpdateProductColorSaleInput) {
    return `This action updates a #${id} productColorSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} productColorSale`;
  }
}
