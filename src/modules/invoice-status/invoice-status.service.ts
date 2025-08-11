import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { InvoiceStatusPrepareProvider } from '@/modules/invoice-status/providers/invoice-status-prepare.provider';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateInvoiceStatusInput } from './dto/create-invoice-status.input';
import { UpdateInvoiceStatusInput } from './dto/update-invoice-status.input';

@Injectable()
export class InvoiceStatusService {
  constructor(
    /**
     * inject invoicStatusRepository
     */
    @InjectRepository(InvoiceStatus)
    private readonly invoiceStatusRepository: Repository<InvoiceStatus>,
    /**
     * inject invoiceStatusPrepareProvider
     */
    private readonly invoiceStatusPrepareProvider: InvoiceStatusPrepareProvider
  ) {}
  create(createInvoiceStatusInput: CreateInvoiceStatusInput) {
    return 'This action adds a new invoiceStatus';
  }

  async findAll(options: FindManyOptions<InvoiceStatus>) {
    return await this.invoiceStatusRepository.find(options);
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceStatus`;
  }

  async find(options: FindManyOptions<InvoiceStatus>) {
    return await this.invoiceStatusRepository.find(options);
  }

  update(id: number, updateInvoiceStatusInput: UpdateInvoiceStatusInput) {
    return `This action updates a #${id} invoiceStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceStatus`;
  }

  invoiceStatusPrepare(invoiceStatus: InvoiceStatus) {
    return this.invoiceStatusPrepareProvider.InvoiceStatusPrepare(
      invoiceStatus
    );
  }
}
