import { Injectable } from '@nestjs/common';
import { CreateInvoiceAddressInput } from './dto/create-invoice-address.input';
import { UpdateInvoiceAddressInput } from './dto/update-invoice-address.input';
import { InvoiceAddressPrepareProvider } from '@/modules/invoice-address/providers/invoice-address-prepare.provider';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';

@Injectable()
export class InvoiceAddressService {
  constructor(
    /**
     * inject invoiceAddressPrepareProvider
     */
    private readonly invoiceAddressPrepareProvider: InvoiceAddressPrepareProvider
  ) {}

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

  invoiceAddressPrepare(address: InvoiceAddress) {
    return this.invoiceAddressPrepareProvider.InvoiceAddressPrepare(address);
  }
}
