import { Injectable } from '@nestjs/common';
import { CreateCustomerRequestFileInput } from './dto/create-customer-request-file.input';
import { UpdateCustomerRequestFileInput } from './dto/update-customer-request-file.input';

@Injectable()
export class CustomerRequestFileService {
  create(createCustomerRequestFileInput: CreateCustomerRequestFileInput) {
    return 'This action adds a new customerRequestFile';
  }

  findAll() {
    return `This action returns all customerRequestFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerRequestFile`;
  }

  update(id: number, updateCustomerRequestFileInput: UpdateCustomerRequestFileInput) {
    return `This action updates a #${id} customerRequestFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerRequestFile`;
  }
}
