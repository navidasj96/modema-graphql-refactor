import { Injectable } from '@nestjs/common';
import { CreateReturnReasonInput } from './dto/create-return-reason.input';
import { UpdateReturnReasonInput } from './dto/update-return-reason.input';

@Injectable()
export class ReturnReasonService {
  create(createReturnReasonInput: CreateReturnReasonInput) {
    return 'This action adds a new returnReason';
  }

  findAll() {
    return `This action returns all returnReason`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnReason`;
  }

  update(id: number, updateReturnReasonInput: UpdateReturnReasonInput) {
    return `This action updates a #${id} returnReason`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnReason`;
  }
}
