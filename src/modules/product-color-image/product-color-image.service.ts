import { Injectable } from '@nestjs/common';
import { CreateProductColorImageInput } from './dto/create-product-color-image.input';
import { UpdateProductColorImageInput } from './dto/update-product-color-image.input';

@Injectable()
export class ProductColorImageService {
  create(createProductColorImageInput: CreateProductColorImageInput) {
    return 'This action adds a new productColorImage';
  }

  findAll() {
    return `This action returns all productColorImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productColorImage`;
  }

  update(
    id: number,
    updateProductColorImageInput: UpdateProductColorImageInput
  ) {
    return `This action updates a #${id} productColorImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} productColorImage`;
  }
}
