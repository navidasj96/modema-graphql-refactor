import { Injectable } from '@nestjs/common';
import { CreateReturnRequestItemImageInput } from './dto/create-return-request-item-image.input';
import { UpdateReturnRequestItemImageInput } from './dto/update-return-request-item-image.input';

@Injectable()
export class ReturnRequestItemImageService {
  create(createReturnRequestItemImageInput: CreateReturnRequestItemImageInput) {
    return 'This action adds a new returnRequestItemImage';
  }

  findAll() {
    return `This action returns all returnRequestItemImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestItemImage`;
  }

  update(
    id: number,
    updateReturnRequestItemImageInput: UpdateReturnRequestItemImageInput
  ) {
    return `This action updates a #${id} returnRequestItemImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestItemImage`;
  }
}
