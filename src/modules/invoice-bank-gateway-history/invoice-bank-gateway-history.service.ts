import { Injectable } from '@nestjs/common';
import { CreateInvoiceBankGatewayHistoryInput } from './dto/create-invoice-bank-gateway-history.input';
import { UpdateInvoiceBankGatewayHistoryInput } from './dto/update-invoice-bank-gateway-history.input';

@Injectable()
export class InvoiceBankGatewayHistoryService {
  create(createInvoiceBankGatewayHistoryInput: CreateInvoiceBankGatewayHistoryInput) {
    return 'This action adds a new invoiceBankGatewayHistory';
  }

  findAll() {
    return `This action returns all invoiceBankGatewayHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceBankGatewayHistory`;
  }

  update(id: number, updateInvoiceBankGatewayHistoryInput: UpdateInvoiceBankGatewayHistoryInput) {
    return `This action updates a #${id} invoiceBankGatewayHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceBankGatewayHistory`;
  }
}
