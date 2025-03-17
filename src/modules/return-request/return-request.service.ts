import { Injectable } from '@nestjs/common';
import { CreateReturnRequestInput } from './dto/create-return-request.input';
import { UpdateReturnRequestInput } from './dto/update-return-request.input';

@Injectable()
export class ReturnRequestService {
  create(createReturnRequestInput: CreateReturnRequestInput) {
    return 'This action adds a new returnRequest';
  }

  findAll() {
    return `This action returns all returnRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequest`;
  }

  update(id: number, updateReturnRequestInput: UpdateReturnRequestInput) {
    return `This action updates a #${id} returnRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequest`;
  }
}
