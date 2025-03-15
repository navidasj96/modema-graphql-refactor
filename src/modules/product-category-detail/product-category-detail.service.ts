import { Injectable } from '@nestjs/common';
import { CreateProductCategoryDetailInput } from './dto/create-product-category-detail.input';
import { UpdateProductCategoryDetailInput } from './dto/update-product-category-detail.input';

@Injectable()
export class ProductCategoryDetailService {
  create(createProductCategoryDetailInput: CreateProductCategoryDetailInput) {
    return 'This action adds a new productCategoryDetail';
  }

  findAll() {
    return `This action returns all productCategoryDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategoryDetail`;
  }

  update(id: number, updateProductCategoryDetailInput: UpdateProductCategoryDetailInput) {
    return `This action updates a #${id} productCategoryDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategoryDetail`;
  }
}
