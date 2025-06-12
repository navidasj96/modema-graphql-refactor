import { Injectable } from '@nestjs/common';
import { CreateModemaAcceleratorInput } from './dto/create-modema-accelerator.input';
import { UpdateModemaAcceleratorInput } from './dto/update-modema-accelerator.input';

@Injectable()
export class ModemaAcceleratorService {
  create(createModemaAcceleratorInput: CreateModemaAcceleratorInput) {
    return 'This action adds a new modemaAccelerator';
  }

  findAll() {
    return `This action returns all modemaAccelerator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modemaAccelerator`;
  }

  update(
    id: number,
    updateModemaAcceleratorInput: UpdateModemaAcceleratorInput
  ) {
    return `This action updates a #${id} modemaAccelerator`;
  }

  remove(id: number) {
    return `This action removes a #${id} modemaAccelerator`;
  }
}
