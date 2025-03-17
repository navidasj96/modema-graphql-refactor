import { Injectable } from '@nestjs/common';
import { CreateVisitorGroupRateInput } from './dto/create-visitor-group-rate.input';
import { UpdateVisitorGroupRateInput } from './dto/update-visitor-group-rate.input';

@Injectable()
export class VisitorGroupRateService {
  create(createVisitorGroupRateInput: CreateVisitorGroupRateInput) {
    return 'This action adds a new visitorGroupRate';
  }

  findAll() {
    return `This action returns all visitorGroupRate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitorGroupRate`;
  }

  update(id: number, updateVisitorGroupRateInput: UpdateVisitorGroupRateInput) {
    return `This action updates a #${id} visitorGroupRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitorGroupRate`;
  }
}
