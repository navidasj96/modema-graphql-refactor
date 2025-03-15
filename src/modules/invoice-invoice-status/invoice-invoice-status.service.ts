import { Injectable } from '@nestjs/common';
import { CreateInvoiceInvoiceStatusInput } from './dto/create-invoice-invoice-status.input';
import { UpdateInvoiceInvoiceStatusInput } from './dto/update-invoice-invoice-status.input';

@Injectable()
export class InvoiceInvoiceStatusService {
  create(createInvoiceInvoiceStatusInput: CreateInvoiceInvoiceStatusInput) {
    return 'This action adds a new invoiceInvoiceStatus';
  }

  findAll() {
    return `This action returns all invoiceInvoiceStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceInvoiceStatus`;
  }

  update(id: number, updateInvoiceInvoiceStatusInput: UpdateInvoiceInvoiceStatusInput) {
    return `This action updates a #${id} invoiceInvoiceStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceInvoiceStatus`;
  }
}
