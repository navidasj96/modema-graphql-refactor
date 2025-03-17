import { Injectable } from '@nestjs/common';
import { CreateProductVideoInput } from './dto/create-product-video.input';
import { UpdateProductVideoInput } from './dto/update-product-video.input';

@Injectable()
export class ProductVideoService {
  create(createProductVideoInput: CreateProductVideoInput) {
    return 'This action adds a new productVideo';
  }

  findAll() {
    return `This action returns all productVideo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productVideo`;
  }

  update(id: number, updateProductVideoInput: UpdateProductVideoInput) {
    return `This action updates a #${id} productVideo`;
  }

  remove(id: number) {
    return `This action removes a #${id} productVideo`;
  }
}
