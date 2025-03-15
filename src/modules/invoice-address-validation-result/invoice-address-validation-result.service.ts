import { Injectable } from '@nestjs/common';
import { CreateInvoiceAddressValidationResultInput } from './dto/create-invoice-address-validation-result.input';
import { UpdateInvoiceAddressValidationResultInput } from './dto/update-invoice-address-validation-result.input';

@Injectable()
export class InvoiceAddressValidationResultService {
  create(createInvoiceAddressValidationResultInput: CreateInvoiceAddressValidationResultInput) {
    return 'This action adds a new invoiceAddressValidationResult';
  }

  findAll() {
    return `This action returns all invoiceAddressValidationResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceAddressValidationResult`;
  }

  update(id: number, updateInvoiceAddressValidationResultInput: UpdateInvoiceAddressValidationResultInput) {
    return `This action updates a #${id} invoiceAddressValidationResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceAddressValidationResult`;
  }
}
