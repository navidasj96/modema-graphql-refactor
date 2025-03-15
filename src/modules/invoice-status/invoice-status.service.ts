import { Injectable } from '@nestjs/common';
import { CreateInvoiceStatusInput } from './dto/create-invoice-status.input';
import { UpdateInvoiceStatusInput } from './dto/update-invoice-status.input';

@Injectable()
export class InvoiceStatusService {
  create(createInvoiceStatusInput: CreateInvoiceStatusInput) {
    return 'This action adds a new invoiceStatus';
  }

  findAll() {
    return `This action returns all invoiceStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceStatus`;
  }

  update(id: number, updateInvoiceStatusInput: UpdateInvoiceStatusInput) {
    return `This action updates a #${id} invoiceStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceStatus`;
  }
}
