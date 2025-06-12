import { Injectable } from '@nestjs/common';
import { CreateReturnRequestItemReturnItemStatusInput } from './dto/create-return-request-item-return-item-status.input';
import { UpdateReturnRequestItemReturnItemStatusInput } from './dto/update-return-request-item-return-item-status.input';

@Injectable()
export class ReturnRequestItemReturnItemStatusService {
  create(
    createReturnRequestItemReturnItemStatusInput: CreateReturnRequestItemReturnItemStatusInput
  ) {
    return 'This action adds a new returnRequestItemReturnItemStatus';
  }

  findAll() {
    return `This action returns all returnRequestItemReturnItemStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestItemReturnItemStatus`;
  }

  update(
    id: number,
    updateReturnRequestItemReturnItemStatusInput: UpdateReturnRequestItemReturnItemStatusInput
  ) {
    return `This action updates a #${id} returnRequestItemReturnItemStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestItemReturnItemStatus`;
  }
}
