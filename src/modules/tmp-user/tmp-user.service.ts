import { Injectable } from '@nestjs/common';
import { CreateTmpUserInput } from './dto/create-tmp-user.input';
import { UpdateTmpUserInput } from './dto/update-tmp-user.input';

@Injectable()
export class TmpUserService {
  create(createTmpUserInput: CreateTmpUserInput) {
    return 'This action adds a new tmpUser';
  }

  findAll() {
    return `This action returns all tmpUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tmpUser`;
  }

  update(id: number, updateTmpUserInput: UpdateTmpUserInput) {
    return `This action updates a #${id} tmpUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} tmpUser`;
  }
}
