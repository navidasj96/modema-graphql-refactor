import { Injectable } from '@nestjs/common';
import { CreateInvoiceTypeInput } from './dto/create-invoice-type.input';
import { UpdateInvoiceTypeInput } from './dto/update-invoice-type.input';

@Injectable()
export class InvoiceTypeService {
  create(createInvoiceTypeInput: CreateInvoiceTypeInput) {
    return 'This action adds a new invoiceType';
  }

  findAll() {
    return `This action returns all invoiceType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceType`;
  }

  update(id: number, updateInvoiceTypeInput: UpdateInvoiceTypeInput) {
    return `This action updates a #${id} invoiceType`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceType`;
  }
}
