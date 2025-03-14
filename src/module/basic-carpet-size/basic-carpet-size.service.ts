import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetSizeInput } from './dto/create-basic-carpet-size.input';
import { UpdateBasicCarpetSizeInput } from './dto/update-basic-carpet-size.input';

@Injectable()
export class BasicCarpetSizeService {
  create(createBasicCarpetSizeInput: CreateBasicCarpetSizeInput) {
    return 'This action adds a new basicCarpetSize';
  }

  findAll() {
    return `This action returns all basicCarpetSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetSize`;
  }

  update(id: number, updateBasicCarpetSizeInput: UpdateBasicCarpetSizeInput) {
    return `This action updates a #${id} basicCarpetSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetSize`;
  }
}
