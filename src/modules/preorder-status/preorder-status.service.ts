import { Injectable } from '@nestjs/common';
import { CreatePreorderStatusInput } from './dto/create-preorder-status.input';
import { UpdatePreorderStatusInput } from './dto/update-preorder-status.input';

@Injectable()
export class PreorderStatusService {
  create(createPreorderStatusInput: CreatePreorderStatusInput) {
    return 'This action adds a new preorderStatus';
  }

  findAll() {
    return `This action returns all preorderStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preorderStatus`;
  }

  update(id: number, updatePreorderStatusInput: UpdatePreorderStatusInput) {
    return `This action updates a #${id} preorderStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} preorderStatus`;
  }
}
