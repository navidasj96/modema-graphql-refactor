import { Injectable } from '@nestjs/common';
import { CreatePreorderRegisterInput } from './dto/create-preorder-register.input';
import { UpdatePreorderRegisterInput } from './dto/update-preorder-register.input';

@Injectable()
export class PreorderRegisterService {
  create(createPreorderRegisterInput: CreatePreorderRegisterInput) {
    return 'This action adds a new preorderRegister';
  }

  findAll() {
    return `This action returns all preorderRegister`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preorderRegister`;
  }

  update(id: number, updatePreorderRegisterInput: UpdatePreorderRegisterInput) {
    return `This action updates a #${id} preorderRegister`;
  }

  remove(id: number) {
    return `This action removes a #${id} preorderRegister`;
  }
}
