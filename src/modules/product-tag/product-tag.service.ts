import { Injectable } from '@nestjs/common';
import { CreateProductTagInput } from './dto/create-product-tag.input';
import { UpdateProductTagInput } from './dto/update-product-tag.input';

@Injectable()
export class ProductTagService {
  create(createProductTagInput: CreateProductTagInput) {
    return 'This action adds a new productTag';
  }

  findAll() {
    return `This action returns all productTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTag`;
  }

  update(id: number, updateProductTagInput: UpdateProductTagInput) {
    return `This action updates a #${id} productTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTag`;
  }
}
