import { Injectable } from '@nestjs/common';
import { CreateModemaAcceleratorImageInput } from './dto/create-modema-accelerator-image.input';
import { UpdateModemaAcceleratorImageInput } from './dto/update-modema-accelerator-image.input';

@Injectable()
export class ModemaAcceleratorImageService {
  create(createModemaAcceleratorImageInput: CreateModemaAcceleratorImageInput) {
    return 'This action adds a new modemaAcceleratorImage';
  }

  findAll() {
    return `This action returns all modemaAcceleratorImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modemaAcceleratorImage`;
  }

  update(id: number, updateModemaAcceleratorImageInput: UpdateModemaAcceleratorImageInput) {
    return `This action updates a #${id} modemaAcceleratorImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} modemaAcceleratorImage`;
  }
}
