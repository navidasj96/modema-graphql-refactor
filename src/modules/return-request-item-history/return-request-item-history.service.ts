import { Injectable } from '@nestjs/common';
import { CreateReturnRequestItemHistoryInput } from './dto/create-return-request-item-history.input';
import { UpdateReturnRequestItemHistoryInput } from './dto/update-return-request-item-history.input';

@Injectable()
export class ReturnRequestItemHistoryService {
  create(
    createReturnRequestItemHistoryInput: CreateReturnRequestItemHistoryInput
  ) {
    return 'This action adds a new returnRequestItemHistory';
  }

  findAll() {
    return `This action returns all returnRequestItemHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestItemHistory`;
  }

  update(
    id: number,
    updateReturnRequestItemHistoryInput: UpdateReturnRequestItemHistoryInput
  ) {
    return `This action updates a #${id} returnRequestItemHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestItemHistory`;
  }
}
