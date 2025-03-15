import { Injectable } from '@nestjs/common';
import { CreateInvoiceRatesResultInput } from './dto/create-invoice-rates-result.input';
import { UpdateInvoiceRatesResultInput } from './dto/update-invoice-rates-result.input';

@Injectable()
export class InvoiceRatesResultService {
  create(createInvoiceRatesResultInput: CreateInvoiceRatesResultInput) {
    return 'This action adds a new invoiceRatesResult';
  }

  findAll() {
    return `This action returns all invoiceRatesResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceRatesResult`;
  }

  update(id: number, updateInvoiceRatesResultInput: UpdateInvoiceRatesResultInput) {
    return `This action updates a #${id} invoiceRatesResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceRatesResult`;
  }
}
