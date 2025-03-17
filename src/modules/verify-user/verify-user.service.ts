import { Injectable } from '@nestjs/common';
import { CreateVerifyUserInput } from './dto/create-verify-user.input';
import { UpdateVerifyUserInput } from './dto/update-verify-user.input';

@Injectable()
export class VerifyUserService {
  create(createVerifyUserInput: CreateVerifyUserInput) {
    return 'This action adds a new verifyUser';
  }

  findAll() {
    return `This action returns all verifyUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} verifyUser`;
  }

  update(id: number, updateVerifyUserInput: UpdateVerifyUserInput) {
    return `This action updates a #${id} verifyUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} verifyUser`;
  }
}
