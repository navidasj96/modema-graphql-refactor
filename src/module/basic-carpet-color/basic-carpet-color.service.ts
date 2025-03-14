import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetColorInput } from './dto/create-basic-carpet-color.input';
import { UpdateBasicCarpetColorInput } from './dto/update-basic-carpet-color.input';

@Injectable()
export class BasicCarpetColorService {
  create(createBasicCarpetColorInput: CreateBasicCarpetColorInput) {
    return 'This action adds a new basicCarpetColor';
  }

  findAll() {
    return `This action returns all basicCarpetColor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetColor`;
  }

  update(id: number, updateBasicCarpetColorInput: UpdateBasicCarpetColorInput) {
    return `This action updates a #${id} basicCarpetColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetColor`;
  }
}
