import { Injectable } from '@nestjs/common';
import { CreateCarpetUsagePlaceInput } from './dto/create-carpet-usage-place.input';
import { UpdateCarpetUsagePlaceInput } from './dto/update-carpet-usage-place.input';

@Injectable()
export class CarpetUsagePlaceService {
  create(createCarpetUsagePlaceInput: CreateCarpetUsagePlaceInput) {
    return 'This action adds a new carpetUsagePlace';
  }

  findAll() {
    return `This action returns all carpetUsagePlace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetUsagePlace`;
  }

  update(id: number, updateCarpetUsagePlaceInput: UpdateCarpetUsagePlaceInput) {
    return `This action updates a #${id} carpetUsagePlace`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetUsagePlace`;
  }
}
