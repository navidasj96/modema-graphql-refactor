import { Injectable } from '@nestjs/common';
import { CreateReturnRequestHistoryInput } from './dto/create-return-request-history.input';
import { UpdateReturnRequestHistoryInput } from './dto/update-return-request-history.input';

@Injectable()
export class ReturnRequestHistoryService {
  create(createReturnRequestHistoryInput: CreateReturnRequestHistoryInput) {
    return 'This action adds a new returnRequestHistory';
  }

  findAll() {
    return `This action returns all returnRequestHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestHistory`;
  }

  update(id: number, updateReturnRequestHistoryInput: UpdateReturnRequestHistoryInput) {
    return `This action updates a #${id} returnRequestHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestHistory`;
  }
}
