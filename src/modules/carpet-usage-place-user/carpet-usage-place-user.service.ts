import { Injectable } from '@nestjs/common';
import { CreateCarpetUsagePlaceUserInput } from './dto/create-carpet-usage-place-user.input';
import { UpdateCarpetUsagePlaceUserInput } from './dto/update-carpet-usage-place-user.input';

@Injectable()
export class CarpetUsagePlaceUserService {
  create(createCarpetUsagePlaceUserInput: CreateCarpetUsagePlaceUserInput) {
    return 'This action adds a new carpetUsagePlaceUser';
  }

  findAll() {
    return `This action returns all carpetUsagePlaceUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetUsagePlaceUser`;
  }

  update(id: number, updateCarpetUsagePlaceUserInput: UpdateCarpetUsagePlaceUserInput) {
    return `This action updates a #${id} carpetUsagePlaceUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetUsagePlaceUser`;
  }
}
