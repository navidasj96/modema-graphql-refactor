import { Injectable } from '@nestjs/common';
import { CreateRussianInput } from './dto/create-russian.input';
import { UpdateRussianInput } from './dto/update-russian.input';

@Injectable()
export class RussianService {
  create(createRussianInput: CreateRussianInput) {
    return 'This action adds a new russian';
  }

  findAll() {
    return `This action returns all russian`;
  }

  findOne(id: number) {
    return `This action returns a #${id} russian`;
  }

  update(id: number, updateRussianInput: UpdateRussianInput) {
    return `This action updates a #${id} russian`;
  }

  remove(id: number) {
    return `This action removes a #${id} russian`;
  }
}
