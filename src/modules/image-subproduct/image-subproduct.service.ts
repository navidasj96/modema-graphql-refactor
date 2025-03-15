import { Injectable } from '@nestjs/common';
import { CreateImageSubproductInput } from './dto/create-image-subproduct.input';
import { UpdateImageSubproductInput } from './dto/update-image-subproduct.input';

@Injectable()
export class ImageSubproductService {
  create(createImageSubproductInput: CreateImageSubproductInput) {
    return 'This action adds a new imageSubproduct';
  }

  findAll() {
    return `This action returns all imageSubproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageSubproduct`;
  }

  update(id: number, updateImageSubproductInput: UpdateImageSubproductInput) {
    return `This action updates a #${id} imageSubproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageSubproduct`;
  }
}
