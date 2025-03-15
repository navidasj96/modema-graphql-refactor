import { Injectable } from '@nestjs/common';
import { CreateInvoiceReversalItemInput } from './dto/create-invoice-reversal-item.input';
import { UpdateInvoiceReversalItemInput } from './dto/update-invoice-reversal-item.input';

@Injectable()
export class InvoiceReversalItemService {
  create(createInvoiceReversalItemInput: CreateInvoiceReversalItemInput) {
    return 'This action adds a new invoiceReversalItem';
  }

  findAll() {
    return `This action returns all invoiceReversalItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceReversalItem`;
  }

  update(id: number, updateInvoiceReversalItemInput: UpdateInvoiceReversalItemInput) {
    return `This action updates a #${id} invoiceReversalItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceReversalItem`;
  }
}
