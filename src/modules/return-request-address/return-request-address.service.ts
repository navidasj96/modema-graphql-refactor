import { Injectable } from '@nestjs/common';
import { CreateReturnRequestAddressInput } from './dto/create-return-request-address.input';
import { UpdateReturnRequestAddressInput } from './dto/update-return-request-address.input';

@Injectable()
export class ReturnRequestAddressService {
  create(createReturnRequestAddressInput: CreateReturnRequestAddressInput) {
    return 'This action adds a new returnRequestAddress';
  }

  findAll() {
    return `This action returns all returnRequestAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} returnRequestAddress`;
  }

  update(
    id: number,
    updateReturnRequestAddressInput: UpdateReturnRequestAddressInput
  ) {
    return `This action updates a #${id} returnRequestAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} returnRequestAddress`;
  }
}
