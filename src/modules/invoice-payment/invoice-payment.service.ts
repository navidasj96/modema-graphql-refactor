import { Injectable } from '@nestjs/common';
import { CreateInvoicePaymentInput } from './dto/create-invoice-payment.input';
import { UpdateInvoicePaymentInput } from './dto/update-invoice-payment.input';

@Injectable()
export class InvoicePaymentService {
  create(createInvoicePaymentInput: CreateInvoicePaymentInput) {
    return 'This action adds a new invoicePayment';
  }

  findAll() {
    return `This action returns all invoicePayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicePayment`;
  }

  update(id: number, updateInvoicePaymentInput: UpdateInvoicePaymentInput) {
    return `This action updates a #${id} invoicePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoicePayment`;
  }
}
