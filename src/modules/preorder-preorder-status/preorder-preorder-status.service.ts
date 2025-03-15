import { Injectable } from '@nestjs/common';
import { CreatePreorderPreorderStatusInput } from './dto/create-preorder-preorder-status.input';
import { UpdatePreorderPreorderStatusInput } from './dto/update-preorder-preorder-status.input';

@Injectable()
export class PreorderPreorderStatusService {
  create(createPreorderPreorderStatusInput: CreatePreorderPreorderStatusInput) {
    return 'This action adds a new preorderPreorderStatus';
  }

  findAll() {
    return `This action returns all preorderPreorderStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preorderPreorderStatus`;
  }

  update(id: number, updatePreorderPreorderStatusInput: UpdatePreorderPreorderStatusInput) {
    return `This action updates a #${id} preorderPreorderStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} preorderPreorderStatus`;
  }
}
