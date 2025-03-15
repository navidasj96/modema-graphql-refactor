import { Injectable } from '@nestjs/common';
import { CreateExitControlInput } from './dto/create-exit-control.input';
import { UpdateExitControlInput } from './dto/update-exit-control.input';

@Injectable()
export class ExitControlService {
  create(createExitControlInput: CreateExitControlInput) {
    return 'This action adds a new exitControl';
  }

  findAll() {
    return `This action returns all exitControl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exitControl`;
  }

  update(id: number, updateExitControlInput: UpdateExitControlInput) {
    return `This action updates a #${id} exitControl`;
  }

  remove(id: number) {
    return `This action removes a #${id} exitControl`;
  }
}
