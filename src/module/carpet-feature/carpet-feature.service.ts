import { Injectable } from '@nestjs/common';
import { CreateCarpetFeatureInput } from './dto/create-carpet-feature.input';
import { UpdateCarpetFeatureInput } from './dto/update-carpet-feature.input';

@Injectable()
export class CarpetFeatureService {
  create(createCarpetFeatureInput: CreateCarpetFeatureInput) {
    return 'This action adds a new carpetFeature';
  }

  findAll() {
    return `This action returns all carpetFeature`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetFeature`;
  }

  update(id: number, updateCarpetFeatureInput: UpdateCarpetFeatureInput) {
    return `This action updates a #${id} carpetFeature`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetFeature`;
  }
}
