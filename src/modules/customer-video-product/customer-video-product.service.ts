import { Injectable } from '@nestjs/common';
import { CreateCustomerVideoProductInput } from './dto/create-customer-video-product.input';
import { UpdateCustomerVideoProductInput } from './dto/update-customer-video-product.input';

@Injectable()
export class CustomerVideoProductService {
  create(createCustomerVideoProductInput: CreateCustomerVideoProductInput) {
    return 'This action adds a new customerVideoProduct';
  }

  findAll() {
    return `This action returns all customerVideoProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerVideoProduct`;
  }

  update(id: number, updateCustomerVideoProductInput: UpdateCustomerVideoProductInput) {
    return `This action updates a #${id} customerVideoProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerVideoProduct`;
  }
}
