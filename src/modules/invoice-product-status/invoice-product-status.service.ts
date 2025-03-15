import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductStatusInput } from './dto/create-invoice-product-status.input';
import { UpdateInvoiceProductStatusInput } from './dto/update-invoice-product-status.input';

@Injectable()
export class InvoiceProductStatusService {
  create(createInvoiceProductStatusInput: CreateInvoiceProductStatusInput) {
    return 'This action adds a new invoiceProductStatus';
  }

  findAll() {
    return `This action returns all invoiceProductStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductStatus`;
  }

  update(id: number, updateInvoiceProductStatusInput: UpdateInvoiceProductStatusInput) {
    return `This action updates a #${id} invoiceProductStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductStatus`;
  }
}
