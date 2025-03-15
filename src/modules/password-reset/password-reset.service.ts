import { Injectable } from '@nestjs/common';
import { CreatePasswordResetInput } from './dto/create-password-reset.input';
import { UpdatePasswordResetInput } from './dto/update-password-reset.input';

@Injectable()
export class PasswordResetService {
  create(createPasswordResetInput: CreatePasswordResetInput) {
    return 'This action adds a new passwordReset';
  }

  findAll() {
    return `This action returns all passwordReset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passwordReset`;
  }

  update(id: number, updatePasswordResetInput: UpdatePasswordResetInput) {
    return `This action updates a #${id} passwordReset`;
  }

  remove(id: number) {
    return `This action removes a #${id} passwordReset`;
  }
}
