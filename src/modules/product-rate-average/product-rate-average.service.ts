import { Injectable } from '@nestjs/common';
import { CreateProductRateAverageInput } from './dto/create-product-rate-average.input';
import { UpdateProductRateAverageInput } from './dto/update-product-rate-average.input';

@Injectable()
export class ProductRateAverageService {
  create(createProductRateAverageInput: CreateProductRateAverageInput) {
    return 'This action adds a new productRateAverage';
  }

  findAll() {
    return `This action returns all productRateAverage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productRateAverage`;
  }

  update(id: number, updateProductRateAverageInput: UpdateProductRateAverageInput) {
    return `This action updates a #${id} productRateAverage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productRateAverage`;
  }
}
