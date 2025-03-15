import { Injectable } from '@nestjs/common';
import { CreateHyperInput } from './dto/create-hyper.input';
import { UpdateHyperInput } from './dto/update-hyper.input';

@Injectable()
export class HyperService {
  create(createHyperInput: CreateHyperInput) {
    return 'This action adds a new hyper';
  }

  findAll() {
    return `This action returns all hyper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hyper`;
  }

  update(id: number, updateHyperInput: UpdateHyperInput) {
    return `This action updates a #${id} hyper`;
  }

  remove(id: number) {
    return `This action removes a #${id} hyper`;
  }
}
