import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductHistoryInput } from './dto/create-invoice-product-history.input';
import { UpdateInvoiceProductHistoryInput } from './dto/update-invoice-product-history.input';

@Injectable()
export class InvoiceProductHistoryService {
  create(createInvoiceProductHistoryInput: CreateInvoiceProductHistoryInput) {
    return 'This action adds a new invoiceProductHistory';
  }

  findAll() {
    return `This action returns all invoiceProductHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductHistory`;
  }

  update(id: number, updateInvoiceProductHistoryInput: UpdateInvoiceProductHistoryInput) {
    return `This action updates a #${id} invoiceProductHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductHistory`;
  }
}
