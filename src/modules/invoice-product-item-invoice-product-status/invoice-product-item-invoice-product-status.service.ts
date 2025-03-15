import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductItemInvoiceProductStatusInput } from './dto/create-invoice-product-item-invoice-product-status.input';
import { UpdateInvoiceProductItemInvoiceProductStatusInput } from './dto/update-invoice-product-item-invoice-product-status.input';

@Injectable()
export class InvoiceProductItemInvoiceProductStatusService {
  create(createInvoiceProductItemInvoiceProductStatusInput: CreateInvoiceProductItemInvoiceProductStatusInput) {
    return 'This action adds a new invoiceProductItemInvoiceProductStatus';
  }

  findAll() {
    return `This action returns all invoiceProductItemInvoiceProductStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductItemInvoiceProductStatus`;
  }

  update(id: number, updateInvoiceProductItemInvoiceProductStatusInput: UpdateInvoiceProductItemInvoiceProductStatusInput) {
    return `This action updates a #${id} invoiceProductItemInvoiceProductStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductItemInvoiceProductStatus`;
  }
}
