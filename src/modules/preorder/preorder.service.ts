import { Injectable } from '@nestjs/common';
import { CreatePreorderInput } from './dto/create-preorder.input';
import { UpdatePreorderInput } from './dto/update-preorder.input';

@Injectable()
export class PreorderService {
  create(createPreorderInput: CreatePreorderInput) {
    return 'This action adds a new preorder';
  }

  findAll() {
    return `This action returns all preorder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preorder`;
  }

  update(id: number, updatePreorderInput: UpdatePreorderInput) {
    return `This action updates a #${id} preorder`;
  }

  remove(id: number) {
    return `This action removes a #${id} preorder`;
  }
}
