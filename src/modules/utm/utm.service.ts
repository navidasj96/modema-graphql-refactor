import { Injectable } from '@nestjs/common';
import { CreateUtmInput } from './dto/create-utm.input';
import { UpdateUtmInput } from './dto/update-utm.input';

@Injectable()
export class UtmService {
  create(createUtmInput: CreateUtmInput) {
    return 'This action adds a new utm';
  }

  findAll() {
    return `This action returns all utm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utm`;
  }

  update(id: number, updateUtmInput: UpdateUtmInput) {
    return `This action updates a #${id} utm`;
  }

  remove(id: number) {
    return `This action removes a #${id} utm`;
  }
}
