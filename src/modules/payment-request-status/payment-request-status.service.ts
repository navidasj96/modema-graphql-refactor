import { Injectable } from '@nestjs/common';
import { CreatePaymentRequestStatusInput } from './dto/create-payment-request-status.input';
import { UpdatePaymentRequestStatusInput } from './dto/update-payment-request-status.input';

@Injectable()
export class PaymentRequestStatusService {
  create(createPaymentRequestStatusInput: CreatePaymentRequestStatusInput) {
    return 'This action adds a new paymentRequestStatus';
  }

  findAll() {
    return `This action returns all paymentRequestStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentRequestStatus`;
  }

  update(
    id: number,
    updatePaymentRequestStatusInput: UpdatePaymentRequestStatusInput
  ) {
    return `This action updates a #${id} paymentRequestStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentRequestStatus`;
  }
}
