import { Injectable } from '@nestjs/common';
import { CreateMellatPaymentErrorInput } from './dto/create-mellat-payment-error.input';
import { UpdateMellatPaymentErrorInput } from './dto/update-mellat-payment-error.input';

@Injectable()
export class MellatPaymentErrorService {
  create(createMellatPaymentErrorInput: CreateMellatPaymentErrorInput) {
    return 'This action adds a new mellatPaymentError';
  }

  findAll() {
    return `This action returns all mellatPaymentError`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mellatPaymentError`;
  }

  update(
    id: number,
    updateMellatPaymentErrorInput: UpdateMellatPaymentErrorInput
  ) {
    return `This action updates a #${id} mellatPaymentError`;
  }

  remove(id: number) {
    return `This action removes a #${id} mellatPaymentError`;
  }
}
