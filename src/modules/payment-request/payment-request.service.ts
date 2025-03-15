import { Injectable } from '@nestjs/common';
import { CreatePaymentRequestInput } from './dto/create-payment-request.input';
import { UpdatePaymentRequestInput } from './dto/update-payment-request.input';

@Injectable()
export class PaymentRequestService {
  create(createPaymentRequestInput: CreatePaymentRequestInput) {
    return 'This action adds a new paymentRequest';
  }

  findAll() {
    return `This action returns all paymentRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentRequest`;
  }

  update(id: number, updatePaymentRequestInput: UpdatePaymentRequestInput) {
    return `This action updates a #${id} paymentRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentRequest`;
  }
}
