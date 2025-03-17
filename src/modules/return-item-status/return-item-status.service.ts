import { Injectable } from '@nestjs/common';
import { CreateReturnItemStatusInput } from './dto/create-return-item-status.input';
import { UpdateReturnItemStatusInput } from './dto/update-return-item-status.input';

@Injectable()
export class ReturnItemStatusService {
  create(createReturnItemStatusInput: CreateReturnItemStatusInput) {
    return 'This action adds a new returnItemStatus';
  }

  findAll() {
    return `This action returns all returnItemStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnItemStatus`;
  }

  update(id: number, updateReturnItemStatusInput: UpdateReturnItemStatusInput) {
    return `This action updates a #${id} returnItemStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnItemStatus`;
  }
}
