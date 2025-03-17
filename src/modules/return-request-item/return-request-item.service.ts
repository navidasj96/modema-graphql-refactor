import { Injectable } from '@nestjs/common';
import { CreateReturnRequestItemInput } from './dto/create-return-request-item.input';
import { UpdateReturnRequestItemInput } from './dto/update-return-request-item.input';

@Injectable()
export class ReturnRequestItemService {
  create(createReturnRequestItemInput: CreateReturnRequestItemInput) {
    return 'This action adds a new returnRequestItem';
  }

  findAll() {
    return `This action returns all returnRequestItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestItem`;
  }

  update(id: number, updateReturnRequestItemInput: UpdateReturnRequestItemInput) {
    return `This action updates a #${id} returnRequestItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestItem`;
  }
}
