import { Injectable } from '@nestjs/common';
import { CreateReturnStatusInput } from './dto/create-return-status.input';
import { UpdateReturnStatusInput } from './dto/update-return-status.input';

@Injectable()
export class ReturnStatusService {
  create(createReturnStatusInput: CreateReturnStatusInput) {
    return 'This action adds a new returnStatus';
  }

  findAll() {
    return `This action returns all returnStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnStatus`;
  }

  update(id: number, updateReturnStatusInput: UpdateReturnStatusInput) {
    return `This action updates a #${id} returnStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnStatus`;
  }
}
