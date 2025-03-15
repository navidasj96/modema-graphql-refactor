import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodFieldInput } from './dto/create-payment-method-field.input';
import { UpdatePaymentMethodFieldInput } from './dto/update-payment-method-field.input';

@Injectable()
export class PaymentMethodFieldService {
  create(createPaymentMethodFieldInput: CreatePaymentMethodFieldInput) {
    return 'This action adds a new paymentMethodField';
  }

  findAll() {
    return `This action returns all paymentMethodField`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentMethodField`;
  }

  update(id: number, updatePaymentMethodFieldInput: UpdatePaymentMethodFieldInput) {
    return `This action updates a #${id} paymentMethodField`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentMethodField`;
  }
}
