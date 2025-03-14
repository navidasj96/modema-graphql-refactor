import { Injectable } from '@nestjs/common';
import { CreateCity2Input } from './dto/create-city2.input';
import { UpdateCity2Input } from './dto/update-city2.input';

@Injectable()
export class City2Service {
  create(createCity2Input: CreateCity2Input) {
    return 'This action adds a new city2';
  }

  findAll() {
    return `This action returns all city2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} city2`;
  }

  update(id: number, updateCity2Input: UpdateCity2Input) {
    return `This action updates a #${id} city2`;
  }

  remove(id: number) {
    return `This action removes a #${id} city2`;
  }
}
