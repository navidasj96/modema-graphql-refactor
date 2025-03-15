import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductItemInput } from './dto/create-invoice-product-item.input';
import { UpdateInvoiceProductItemInput } from './dto/update-invoice-product-item.input';

@Injectable()
export class InvoiceProductItemService {
  create(createInvoiceProductItemInput: CreateInvoiceProductItemInput) {
    return 'This action adds a new invoiceProductItem';
  }

  findAll() {
    return `This action returns all invoiceProductItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductItem`;
  }

  update(id: number, updateInvoiceProductItemInput: UpdateInvoiceProductItemInput) {
    return `This action updates a #${id} invoiceProductItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductItem`;
  }
}
