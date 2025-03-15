import { Injectable } from '@nestjs/common';
import { CreateHyperstarCodeInput } from './dto/create-hyperstar-code.input';
import { UpdateHyperstarCodeInput } from './dto/update-hyperstar-code.input';

@Injectable()
export class HyperstarCodeService {
  create(createHyperstarCodeInput: CreateHyperstarCodeInput) {
    return 'This action adds a new hyperstarCode';
  }

  findAll() {
    return `This action returns all hyperstarCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hyperstarCode`;
  }

  update(id: number, updateHyperstarCodeInput: UpdateHyperstarCodeInput) {
    return `This action updates a #${id} hyperstarCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} hyperstarCode`;
  }
}
