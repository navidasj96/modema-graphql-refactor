import { Injectable } from '@nestjs/common';
import { CreateReturnRequestItemVideoInput } from './dto/create-return-request-item-video.input';
import { UpdateReturnRequestItemVideoInput } from './dto/update-return-request-item-video.input';

@Injectable()
export class ReturnRequestItemVideoService {
  create(createReturnRequestItemVideoInput: CreateReturnRequestItemVideoInput) {
    return 'This action adds a new returnRequestItemVideo';
  }

  findAll() {
    return `This action returns all returnRequestItemVideo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestItemVideo`;
  }

  update(
    id: number,
    updateReturnRequestItemVideoInput: UpdateReturnRequestItemVideoInput
  ) {
    return `This action updates a #${id} returnRequestItemVideo`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestItemVideo`;
  }
}
