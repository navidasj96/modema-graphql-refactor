import { Injectable } from '@nestjs/common';
import { CreateModelHasPermissionInput } from './dto/create-model-has-permission.input';
import { UpdateModelHasPermissionInput } from './dto/update-model-has-permission.input';

@Injectable()
export class ModelHasPermissionService {
  create(createModelHasPermissionInput: CreateModelHasPermissionInput) {
    return 'This action adds a new modelHasPermission';
  }

  findAll() {
    return `This action returns all modelHasPermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modelHasPermission`;
  }

  update(
    id: number,
    updateModelHasPermissionInput: UpdateModelHasPermissionInput
  ) {
    return `This action updates a #${id} modelHasPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelHasPermission`;
  }
}
