import { Injectable } from '@nestjs/common';
import { CreateProductRateInput } from './dto/create-product-rate.input';
import { UpdateProductRateInput } from './dto/update-product-rate.input';

@Injectable()
export class ProductRateService {
  create(createProductRateInput: CreateProductRateInput) {
    return 'This action adds a new productRate';
  }

  findAll() {
    return `This action returns all productRate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productRate`;
  }

  update(id: number, updateProductRateInput: UpdateProductRateInput) {
    return `This action updates a #${id} productRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} productRate`;
  }
}
