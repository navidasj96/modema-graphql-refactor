import { Injectable } from '@nestjs/common';
import { CreateCarpetFeatureUserInput } from './dto/create-carpet-feature-user.input';
import { UpdateCarpetFeatureUserInput } from './dto/update-carpet-feature-user.input';

@Injectable()
export class CarpetFeatureUserService {
  create(createCarpetFeatureUserInput: CreateCarpetFeatureUserInput) {
    return 'This action adds a new carpetFeatureUser';
  }

  findAll() {
    return `This action returns all carpetFeatureUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetFeatureUser`;
  }

  update(id: number, updateCarpetFeatureUserInput: UpdateCarpetFeatureUserInput) {
    return `This action updates a #${id} carpetFeatureUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetFeatureUser`;
  }
}
