import { Injectable } from '@nestjs/common';
import { CreateReturnTypeInput } from './dto/create-return-type.input';
import { UpdateReturnTypeInput } from './dto/update-return-type.input';

@Injectable()
export class ReturnTypeService {
  create(createReturnTypeInput: CreateReturnTypeInput) {
    return 'This action adds a new returnType';
  }

  findAll() {
    return `This action returns all returnType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnType`;
  }

  update(id: number, updateReturnTypeInput: UpdateReturnTypeInput) {
    return `This action updates a #${id} returnType`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnType`;
  }
}
