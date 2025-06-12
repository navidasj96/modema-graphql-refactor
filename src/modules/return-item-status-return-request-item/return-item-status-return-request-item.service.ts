import { Injectable } from '@nestjs/common';
import { CreateReturnItemStatusReturnRequestItemInput } from './dto/create-return-item-status-return-request-item.input';
import { UpdateReturnItemStatusReturnRequestItemInput } from './dto/update-return-item-status-return-request-item.input';

@Injectable()
export class ReturnItemStatusReturnRequestItemService {
  create(
    createReturnItemStatusReturnRequestItemInput: CreateReturnItemStatusReturnRequestItemInput
  ) {
    return 'This action adds a new returnItemStatusReturnRequestItem';
  }

  findAll() {
    return `This action returns all returnItemStatusReturnRequestItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnItemStatusReturnRequestItem`;
  }

  update(
    id: number,
    updateReturnItemStatusReturnRequestItemInput: UpdateReturnItemStatusReturnRequestItemInput
  ) {
    return `This action updates a #${id} returnItemStatusReturnRequestItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnItemStatusReturnRequestItem`;
  }
}
