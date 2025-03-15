import { Injectable } from '@nestjs/common';
import { CreateBorderInput } from './dto/create-border.input';
import { UpdateBorderInput } from './dto/update-border.input';

@Injectable()
export class BorderService {
  create(createBorderInput: CreateBorderInput) {
    return 'This action adds a new border';
  }

  findAll() {
    return `This action returns all border`;
  }

  findOne(id: number) {
    return `This action returns a #${id} border`;
  }

  update(id: number, updateBorderInput: UpdateBorderInput) {
    return `This action updates a #${id} border`;
  }

  remove(id: number) {
    return `This action removes a #${id} border`;
  }
}
