import { Injectable } from '@nestjs/common';
import { CreateProductCategoryRateInput } from './dto/create-product-category-rate.input';
import { UpdateProductCategoryRateInput } from './dto/update-product-category-rate.input';

@Injectable()
export class ProductCategoryRateService {
  create(createProductCategoryRateInput: CreateProductCategoryRateInput) {
    return 'This action adds a new productCategoryRate';
  }

  findAll() {
    return `This action returns all productCategoryRate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategoryRate`;
  }

  update(
    id: number,
    updateProductCategoryRateInput: UpdateProductCategoryRateInput
  ) {
    return `This action updates a #${id} productCategoryRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategoryRate`;
  }
}
