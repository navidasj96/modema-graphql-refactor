import { Injectable } from '@nestjs/common';
import { CreateProductProductCategoryInput } from './dto/create-product-product-category.input';
import { UpdateProductProductCategoryInput } from './dto/update-product-product-category.input';

@Injectable()
export class ProductProductCategoryService {
  create(createProductProductCategoryInput: CreateProductProductCategoryInput) {
    return 'This action adds a new productProductCategory';
  }

  findAll() {
    return `This action returns all productProductCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productProductCategory`;
  }

  update(id: number, updateProductProductCategoryInput: UpdateProductProductCategoryInput) {
    return `This action updates a #${id} productProductCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productProductCategory`;
  }
}
