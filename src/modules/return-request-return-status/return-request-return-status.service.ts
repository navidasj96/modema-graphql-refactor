import { Injectable } from '@nestjs/common';
import { CreateReturnRequestReturnStatusInput } from './dto/create-return-request-return-status.input';
import { UpdateReturnRequestReturnStatusInput } from './dto/update-return-request-return-status.input';

@Injectable()
export class ReturnRequestReturnStatusService {
  create(
    createReturnRequestReturnStatusInput: CreateReturnRequestReturnStatusInput
  ) {
    return 'This action adds a new returnRequestReturnStatus';
  }

  findAll() {
    return `This action returns all returnRequestReturnStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestReturnStatus`;
  }

  update(
    id: number,
    updateReturnRequestReturnStatusInput: UpdateReturnRequestReturnStatusInput
  ) {
    return `This action updates a #${id} returnRequestReturnStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestReturnStatus`;
  }
}
