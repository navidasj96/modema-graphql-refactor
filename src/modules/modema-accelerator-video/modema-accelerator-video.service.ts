import { Injectable } from '@nestjs/common';
import { CreateModemaAcceleratorVideoInput } from './dto/create-modema-accelerator-video.input';
import { UpdateModemaAcceleratorVideoInput } from './dto/update-modema-accelerator-video.input';

@Injectable()
export class ModemaAcceleratorVideoService {
  create(createModemaAcceleratorVideoInput: CreateModemaAcceleratorVideoInput) {
    return 'This action adds a new modemaAcceleratorVideo';
  }

  findAll() {
    return `This action returns all modemaAcceleratorVideo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modemaAcceleratorVideo`;
  }

  update(
    id: number,
    updateModemaAcceleratorVideoInput: UpdateModemaAcceleratorVideoInput
  ) {
    return `This action updates a #${id} modemaAcceleratorVideo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modemaAcceleratorVideo`;
  }
}
