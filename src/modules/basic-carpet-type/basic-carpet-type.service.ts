import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetTypeInput } from './dto/create-basic-carpet-type.input';
import { UpdateBasicCarpetTypeInput } from './dto/update-basic-carpet-type.input';

@Injectable()
export class BasicCarpetTypeService {
  create(createBasicCarpetTypeInput: CreateBasicCarpetTypeInput) {
    return 'This action adds a new basicCarpetType';
  }

  findAll() {
    return `This action returns all basicCarpetType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetType`;
  }

  update(id: number, updateBasicCarpetTypeInput: UpdateBasicCarpetTypeInput) {
    return `This action updates a #${id} basicCarpetType`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetType`;
  }
}
