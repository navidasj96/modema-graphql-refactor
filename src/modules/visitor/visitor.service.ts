import { Injectable } from '@nestjs/common';
import { CreateVisitorInput } from './dto/create-visitor.input';
import { UpdateVisitorInput } from './dto/update-visitor.input';

@Injectable()
export class VisitorService {
  create(createVisitorInput: CreateVisitorInput) {
    return 'This action adds a new visitor';
  }

  findAll() {
    return `This action returns all visitor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitor`;
  }

  update(id: number, updateVisitorInput: UpdateVisitorInput) {
    return `This action updates a #${id} visitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitor`;
  }
}
