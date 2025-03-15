import { Injectable } from '@nestjs/common';
import { CreateExitControlItemInput } from './dto/create-exit-control-item.input';
import { UpdateExitControlItemInput } from './dto/update-exit-control-item.input';

@Injectable()
export class ExitControlItemService {
  create(createExitControlItemInput: CreateExitControlItemInput) {
    return 'This action adds a new exitControlItem';
  }

  findAll() {
    return `This action returns all exitControlItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exitControlItem`;
  }

  update(id: number, updateExitControlItemInput: UpdateExitControlItemInput) {
    return `This action updates a #${id} exitControlItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} exitControlItem`;
  }
}
