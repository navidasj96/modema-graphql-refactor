import { Injectable } from '@nestjs/common';
import { CreateGhazalInput } from './dto/create-ghazal.input';
import { UpdateGhazalInput } from './dto/update-ghazal.input';

@Injectable()
export class GhazalService {
  create(createGhazalInput: CreateGhazalInput) {
    return 'This action adds a new ghazal';
  }

  findAll() {
    return `This action returns all ghazal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ghazal`;
  }

  update(id: number, updateGhazalInput: UpdateGhazalInput) {
    return `This action updates a #${id} ghazal`;
  }

  remove(id: number) {
    return `This action removes a #${id} ghazal`;
  }
}
