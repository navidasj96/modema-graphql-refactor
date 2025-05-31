import { Injectable } from '@nestjs/common';
import { CreateInvoiceStatusInput } from './dto/create-invoice-status.input';
import { UpdateInvoiceStatusInput } from './dto/update-invoice-status.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { ReadyToSendProduct } from '../ready-to-send-product/entities/ready-to-send-product.entity';
import { read } from 'fs';
import { FindManyOptions, Repository } from 'typeorm';
import { InvoiceStatusPrepareProvider } from '@/modules/invoice-status/providers/invoice-status-prepare.provider';

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
