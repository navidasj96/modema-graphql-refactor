import { Injectable } from '@nestjs/common';
import { CreateCustomerRequestInput } from './dto/create-customer-request.input';
import { UpdateCustomerRequestInput } from './dto/update-customer-request.input';

@Injectable()
export class CustomerRequestService {
  create(createCustomerRequestInput: CreateCustomerRequestInput) {
    return 'This action adds a new customerRequest';
  }

  findAll() {
    return `This action returns all customerRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerRequest`;
  }

  update(id: number, updateCustomerRequestInput: UpdateCustomerRequestInput) {
    return `This action updates a #${id} customerRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerRequest`;
  }
}
