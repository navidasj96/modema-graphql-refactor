import { Injectable } from '@nestjs/common';
import { CreateModelVisitInput } from './dto/create-model-visit.input';
import { UpdateModelVisitInput } from './dto/update-model-visit.input';

@Injectable()
export class ModelVisitService {
  create(createModelVisitInput: CreateModelVisitInput) {
    return 'This action adds a new modelVisit';
  }

  findAll() {
    return `This action returns all modelVisit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modelVisit`;
  }

  update(id: number, updateModelVisitInput: UpdateModelVisitInput) {
    return `This action updates a #${id} modelVisit`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelVisit`;
  }
}
