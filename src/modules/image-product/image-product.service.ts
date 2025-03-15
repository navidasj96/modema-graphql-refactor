import { Injectable } from '@nestjs/common';
import { CreateImageProductInput } from './dto/create-image-product.input';
import { UpdateImageProductInput } from './dto/update-image-product.input';

@Injectable()
export class ImageProductService {
  create(createImageProductInput: CreateImageProductInput) {
    return 'This action adds a new imageProduct';
  }

  findAll() {
    return `This action returns all imageProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageProduct`;
  }

  update(id: number, updateImageProductInput: UpdateImageProductInput) {
    return `This action updates a #${id} imageProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageProduct`;
  }
}
