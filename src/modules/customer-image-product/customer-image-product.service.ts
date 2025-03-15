import { Injectable } from '@nestjs/common';
import { CreateCustomerImageProductInput } from './dto/create-customer-image-product.input';
import { UpdateCustomerImageProductInput } from './dto/update-customer-image-product.input';

@Injectable()
export class CustomerImageProductService {
  create(createCustomerImageProductInput: CreateCustomerImageProductInput) {
    return 'This action adds a new customerImageProduct';
  }

  findAll() {
    return `This action returns all customerImageProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerImageProduct`;
  }

  update(id: number, updateCustomerImageProductInput: UpdateCustomerImageProductInput) {
    return `This action updates a #${id} customerImageProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerImageProduct`;
  }
}
