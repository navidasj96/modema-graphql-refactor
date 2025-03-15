import { Injectable } from '@nestjs/common';
import { CreateInvoiceReversalInput } from './dto/create-invoice-reversal.input';
import { UpdateInvoiceReversalInput } from './dto/update-invoice-reversal.input';

@Injectable()
export class InvoiceReversalService {
  create(createInvoiceReversalInput: CreateInvoiceReversalInput) {
    return 'This action adds a new invoiceReversal';
  }

  findAll() {
    return `This action returns all invoiceReversal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceReversal`;
  }

  update(id: number, updateInvoiceReversalInput: UpdateInvoiceReversalInput) {
    return `This action updates a #${id} invoiceReversal`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceReversal`;
  }
}
