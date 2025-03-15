import { Injectable } from '@nestjs/common';
import { CreateImageLayerInput } from './dto/create-image-layer.input';
import { UpdateImageLayerInput } from './dto/update-image-layer.input';

@Injectable()
export class ImageLayerService {
  create(createImageLayerInput: CreateImageLayerInput) {
    return 'This action adds a new imageLayer';
  }

  findAll() {
    return `This action returns all imageLayer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageLayer`;
  }

  update(id: number, updateImageLayerInput: UpdateImageLayerInput) {
    return `This action updates a #${id} imageLayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageLayer`;
  }
}
