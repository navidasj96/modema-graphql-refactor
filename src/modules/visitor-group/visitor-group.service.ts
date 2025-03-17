import { Injectable } from '@nestjs/common';
import { CreateVisitorGroupInput } from './dto/create-visitor-group.input';
import { UpdateVisitorGroupInput } from './dto/update-visitor-group.input';

@Injectable()
export class VisitorGroupService {
  create(createVisitorGroupInput: CreateVisitorGroupInput) {
    return 'This action adds a new visitorGroup';
  }

  findAll() {
    return `This action returns all visitorGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitorGroup`;
  }

  update(id: number, updateVisitorGroupInput: UpdateVisitorGroupInput) {
    return `This action updates a #${id} visitorGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitorGroup`;
  }
}
