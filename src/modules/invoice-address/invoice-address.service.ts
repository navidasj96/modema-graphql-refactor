import { Injectable } from '@nestjs/common';
import { CreateInvoiceAddressInput } from './dto/create-invoice-address.input';
import { UpdateInvoiceAddressInput } from './dto/update-invoice-address.input';

@Injectable()
export class InvoiceAddressService {
  create(createInvoiceAddressInput: CreateInvoiceAddressInput) {
    return 'This action adds a new invoiceAddress';
  }

  findAll() {
    return `This action returns all invoiceAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceAddress`;
  }

  update(id: number, updateInvoiceAddressInput: UpdateInvoiceAddressInput) {
    return `This action updates a #${id} invoiceAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceAddress`;
  }
}
