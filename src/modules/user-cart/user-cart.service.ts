import { Injectable } from '@nestjs/common';
import { CreateUserCartInput } from './dto/create-user-cart.input';
import { UpdateUserCartInput } from './dto/update-user-cart.input';

@Injectable()
export class UserCartService {
  create(createUserCartInput: CreateUserCartInput) {
    return 'This action adds a new userCart';
  }

  findAll() {
    return `This action returns all userCart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCart`;
  }

  update(id: number, updateUserCartInput: UpdateUserCartInput) {
    return `This action updates a #${id} userCart`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCart`;
  }
}
