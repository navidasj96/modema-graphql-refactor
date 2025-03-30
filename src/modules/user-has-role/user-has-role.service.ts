import { Injectable } from '@nestjs/common';
import { CreateUserHasRoleInput } from './dto/create-user-has-role.input';
import { UpdateUserHasRoleInput } from './dto/update-user-has-role.input';

@Injectable()
export class UserHasRoleService {
  create(createUserHasRoleInput: CreateUserHasRoleInput) {
    return 'This action adds a new userHasRole';
  }

  findAll() {
    return `This action returns all userHasRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHasRole`;
  }

  update(id: number, updateUserHasRoleInput: UpdateUserHasRoleInput) {
    return `This action updates a #${id} userHasRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHasRole`;
  }
}
