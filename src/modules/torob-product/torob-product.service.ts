import { Injectable } from '@nestjs/common';
import { CreateTorobProductInput } from './dto/create-torob-product.input';
import { UpdateTorobProductInput } from './dto/update-torob-product.input';

@Injectable()
export class TorobProductService {
  create(createTorobProductInput: CreateTorobProductInput) {
    return 'This action adds a new torobProduct';
  }

  findAll() {
    return `This action returns all torobProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} torobProduct`;
  }

  update(id: number, updateTorobProductInput: UpdateTorobProductInput) {
    return `This action updates a #${id} torobProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} torobProduct`;
  }
}
