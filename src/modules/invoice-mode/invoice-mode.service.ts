import { Injectable } from '@nestjs/common';
import { CreateInvoiceModeInput } from './dto/create-invoice-mode.input';
import { UpdateInvoiceModeInput } from './dto/update-invoice-mode.input';

@Injectable()
export class InvoiceModeService {
  create(createInvoiceModeInput: CreateInvoiceModeInput) {
    return 'This action adds a new invoiceMode';
  }

  findAll() {
    return `This action returns all invoiceMode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceMode`;
  }

  update(id: number, updateInvoiceModeInput: UpdateInvoiceModeInput) {
    return `This action updates a #${id} invoiceMode`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceMode`;
  }
}
