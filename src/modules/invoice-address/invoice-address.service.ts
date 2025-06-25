import { Injectable } from '@nestjs/common';
import { CreateInvoiceAddressInput } from './dto/create-invoice-address.input';
import { UpdateInvoiceAddressInput } from './dto/update-invoice-address.input';
import { InvoiceAddressPrepareProvider } from '@/modules/invoice-address/providers/invoice-address-prepare.provider';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceAddressService {
  constructor(
    /**
     * inject invoiceAddressPrepareProvider
     */
    private readonly invoiceAddressPrepareProvider: InvoiceAddressPrepareProvider,
    /**
     * inject invoiceAddressRepository
     */
    @InjectRepository(InvoiceAddress)
    private readonly invoiceAddressRepository: Repository<InvoiceAddress>
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

  async save(invoiceAddress: InvoiceAddress, manager?: EntityManager) {
    const invoiceAddressRepository = manager
      ? manager.getRepository(InvoiceAddress)
      : this.invoiceAddressRepository;
    return await invoiceAddressRepository.save(invoiceAddress);
  }
}
