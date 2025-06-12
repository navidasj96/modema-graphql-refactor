import { Injectable } from '@nestjs/common';
import { CreateInvoiceShippingRateInput } from './dto/create-invoice-shipping-rate.input';
import { UpdateInvoiceShippingRateInput } from './dto/update-invoice-shipping-rate.input';

@Injectable()
export class InvoiceShippingRateService {
  create(createInvoiceShippingRateInput: CreateInvoiceShippingRateInput) {
    return 'This action adds a new invoiceShippingRate';
  }

  findAll() {
    return `This action returns all invoiceShippingRate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceShippingRate`;
  }

  update(
    id: number,
    updateInvoiceShippingRateInput: UpdateInvoiceShippingRateInput
  ) {
    return `This action updates a #${id} invoiceShippingRate`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceShippingRate`;
  }
}
