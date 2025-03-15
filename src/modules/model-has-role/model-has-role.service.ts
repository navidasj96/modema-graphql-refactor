import { Injectable } from '@nestjs/common';
import { CreateModelHasRoleInput } from './dto/create-model-has-role.input';
import { UpdateModelHasRoleInput } from './dto/update-model-has-role.input';

@Injectable()
export class ModelHasRoleService {
  create(createModelHasRoleInput: CreateModelHasRoleInput) {
    return 'This action adds a new modelHasRole';
  }

  findAll() {
    return `This action returns all modelHasRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modelHasRole`;
  }

  update(id: number, updateModelHasRoleInput: UpdateModelHasRoleInput) {
    return `This action updates a #${id} modelHasRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelHasRole`;
  }
}
