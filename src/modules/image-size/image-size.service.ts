import { Injectable } from '@nestjs/common';
import { CreateImageSizeInput } from './dto/create-image-size.input';
import { UpdateImageSizeInput } from './dto/update-image-size.input';

@Injectable()
export class ImageSizeService {
  create(createImageSizeInput: CreateImageSizeInput) {
    return 'This action adds a new imageSize';
  }

  findAll() {
    return `This action returns all imageSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageSize`;
  }

  update(id: number, updateImageSizeInput: UpdateImageSizeInput) {
    return `This action updates a #${id} imageSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageSize`;
  }
}
