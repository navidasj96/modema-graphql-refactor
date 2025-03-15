import { Injectable } from '@nestjs/common';
import { CreateNeedsPhotographySubproductInput } from './dto/create-needs-photography-subproduct.input';
import { UpdateNeedsPhotographySubproductInput } from './dto/update-needs-photography-subproduct.input';

@Injectable()
export class NeedsPhotographySubproductService {
  create(createNeedsPhotographySubproductInput: CreateNeedsPhotographySubproductInput) {
    return 'This action adds a new needsPhotographySubproduct';
  }

  findAll() {
    return `This action returns all needsPhotographySubproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} needsPhotographySubproduct`;
  }

  update(id: number, updateNeedsPhotographySubproductInput: UpdateNeedsPhotographySubproductInput) {
    return `This action updates a #${id} needsPhotographySubproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} needsPhotographySubproduct`;
  }
}
