import { Injectable } from '@nestjs/common';
import { CreateInvoiceHistoryInput } from './dto/create-invoice-history.input';
import { UpdateInvoiceHistoryInput } from './dto/update-invoice-history.input';

@Injectable()
export class InvoiceHistoryService {
  create(createInvoiceHistoryInput: CreateInvoiceHistoryInput) {
    return 'This action adds a new invoiceHistory';
  }

  findAll() {
    return `This action returns all invoiceHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceHistory`;
  }

  update(id: number, updateInvoiceHistoryInput: UpdateInvoiceHistoryInput) {
    return `This action updates a #${id} invoiceHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceHistory`;
  }
}
