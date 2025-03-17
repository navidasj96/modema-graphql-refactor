import { Injectable } from '@nestjs/common';
import { CreateUserUtmInput } from './dto/create-user-utm.input';
import { UpdateUserUtmInput } from './dto/update-user-utm.input';

@Injectable()
export class UserUtmService {
  create(createUserUtmInput: CreateUserUtmInput) {
    return 'This action adds a new userUtm';
  }

  findAll() {
    return `This action returns all userUtm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userUtm`;
  }

  update(id: number, updateUserUtmInput: UpdateUserUtmInput) {
    return `This action updates a #${id} userUtm`;
  }

  remove(id: number) {
    return `This action removes a #${id} userUtm`;
  }
}
