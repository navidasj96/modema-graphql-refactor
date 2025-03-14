import { Injectable } from '@nestjs/common';
import { CreateCarpetSizeInput } from './dto/create-carpet-size.input';
import { UpdateCarpetSizeInput } from './dto/update-carpet-size.input';

@Injectable()
export class CarpetSizeService {
  create(createCarpetSizeInput: CreateCarpetSizeInput) {
    return 'This action adds a new carpetSize';
  }

  findAll() {
    return `This action returns all carpetSize`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetSize`;
  }

  update(id: number, updateCarpetSizeInput: UpdateCarpetSizeInput) {
    return `This action updates a #${id} carpetSize`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetSize`;
  }
}
