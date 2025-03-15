import { Injectable } from '@nestjs/common';
import { CreateInvoiceNegotiationInput } from './dto/create-invoice-negotiation.input';
import { UpdateInvoiceNegotiationInput } from './dto/update-invoice-negotiation.input';

@Injectable()
export class InvoiceNegotiationService {
  create(createInvoiceNegotiationInput: CreateInvoiceNegotiationInput) {
    return 'This action adds a new invoiceNegotiation';
  }

  findAll() {
    return `This action returns all invoiceNegotiation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceNegotiation`;
  }

  update(id: number, updateInvoiceNegotiationInput: UpdateInvoiceNegotiationInput) {
    return `This action updates a #${id} invoiceNegotiation`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceNegotiation`;
  }
}
