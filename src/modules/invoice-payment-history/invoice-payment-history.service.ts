import { Injectable } from '@nestjs/common';
import { CreateInvoicePaymentHistoryInput } from './dto/create-invoice-payment-history.input';
import { UpdateInvoicePaymentHistoryInput } from './dto/update-invoice-payment-history.input';

@Injectable()
export class InvoicePaymentHistoryService {
  create(createInvoicePaymentHistoryInput: CreateInvoicePaymentHistoryInput) {
    return 'This action adds a new invoicePaymentHistory';
  }

  findAll() {
    return `This action returns all invoicePaymentHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicePaymentHistory`;
  }

  update(id: number, updateInvoicePaymentHistoryInput: UpdateInvoicePaymentHistoryInput) {
    return `This action updates a #${id} invoicePaymentHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoicePaymentHistory`;
  }
}
