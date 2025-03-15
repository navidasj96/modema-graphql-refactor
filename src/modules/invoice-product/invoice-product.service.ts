import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductInput } from './dto/create-invoice-product.input';
import { UpdateInvoiceProductInput } from './dto/update-invoice-product.input';

@Injectable()
export class InvoiceProductService {
  create(createInvoiceProductInput: CreateInvoiceProductInput) {
    return 'This action adds a new invoiceProduct';
  }

  findAll() {
    return `This action returns all invoiceProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProduct`;
  }

  update(id: number, updateInvoiceProductInput: UpdateInvoiceProductInput) {
    return `This action updates a #${id} invoiceProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProduct`;
  }
}
