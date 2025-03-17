import { Injectable } from '@nestjs/common';
import { CreateTextLayerInput } from './dto/create-text-layer.input';
import { UpdateTextLayerInput } from './dto/update-text-layer.input';

@Injectable()
export class TextLayerService {
  create(createTextLayerInput: CreateTextLayerInput) {
    return 'This action adds a new textLayer';
  }

  findAll() {
    return `This action returns all textLayer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textLayer`;
  }

  update(id: number, updateTextLayerInput: UpdateTextLayerInput) {
    return `This action updates a #${id} textLayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} textLayer`;
  }
}
