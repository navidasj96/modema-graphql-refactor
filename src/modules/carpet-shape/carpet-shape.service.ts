import { Injectable } from '@nestjs/common';
import { CreateCarpetShapeInput } from './dto/create-carpet-shape.input';
import { UpdateCarpetShapeInput } from './dto/update-carpet-shape.input';

@Injectable()
export class CarpetShapeService {
  create(createCarpetShapeInput: CreateCarpetShapeInput) {
    return 'This action adds a new carpetShape';
  }

  findAll() {
    return `This action returns all carpetShape`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carpetShape`;
  }

  update(id: number, updateCarpetShapeInput: UpdateCarpetShapeInput) {
    return `This action updates a #${id} carpetShape`;
  }

  remove(id: number) {
    return `This action removes a #${id} carpetShape`;
  }
}
