import { Injectable } from '@nestjs/common';
import { CreateDamageReasonInput } from './dto/create-damage-reason.input';
import { UpdateDamageReasonInput } from './dto/update-damage-reason.input';

@Injectable()
export class DamageReasonService {
  create(createDamageReasonInput: CreateDamageReasonInput) {
    return 'This action adds a new damageReason';
  }

  findAll() {
    return `This action returns all damageReason`;
  }

  findOne(id: number) {
    return `This action returns a #${id} damageReason`;
  }

  update(id: number, updateDamageReasonInput: UpdateDamageReasonInput) {
    return `This action updates a #${id} damageReason`;
  }

  remove(id: number) {
    return `This action removes a #${id} damageReason`;
  }
}
