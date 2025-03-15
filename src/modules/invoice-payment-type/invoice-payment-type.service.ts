import { Injectable } from '@nestjs/common';
import { CreateInvoicePaymentTypeInput } from './dto/create-invoice-payment-type.input';
import { UpdateInvoicePaymentTypeInput } from './dto/update-invoice-payment-type.input';

@Injectable()
export class InvoicePaymentTypeService {
  create(createInvoicePaymentTypeInput: CreateInvoicePaymentTypeInput) {
    return 'This action adds a new invoicePaymentType';
  }

  findAll() {
    return `This action returns all invoicePaymentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicePaymentType`;
  }

  update(id: number, updateInvoicePaymentTypeInput: UpdateInvoicePaymentTypeInput) {
    return `This action updates a #${id} invoicePaymentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoicePaymentType`;
  }
}
