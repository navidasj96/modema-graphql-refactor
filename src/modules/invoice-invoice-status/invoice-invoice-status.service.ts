import { Injectable } from '@nestjs/common';
import { CreateInvoiceInvoiceStatusInput } from './dto/create-invoice-invoice-status.input';
import { UpdateInvoiceInvoiceStatusInput } from './dto/update-invoice-invoice-status.input';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/entities/invoice-invoice-status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { InvoiceStatus } from '../invoice-status/domain/invoice-status';

@Injectable()
export class InvoiceInvoiceStatusService {
  constructor(
    /**
     * inject invoiceInvoiceStatusRepository
     */
    @InjectRepository(InvoiceInvoiceStatus)
    private readonly invoiceInvoiceStatusRepository: Repository<InvoiceInvoiceStatus>
  ) {}
  create(createInvoiceInvoiceStatusInput: CreateInvoiceInvoiceStatusInput) {
    return 'This action adds a new invoiceInvoiceStatus';
  }

  findAll() {
    return `This action returns all invoiceInvoiceStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceInvoiceStatus`;
  }

  update(
    id: number,
    updateInvoiceInvoiceStatusInput: UpdateInvoiceInvoiceStatusInput
  ) {
    return `This action updates a #${id} invoiceInvoiceStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceInvoiceStatus`;
  }

  async attach(
    invoiceId: number,
    invoiceStatusId: number,
    userId: number,
    comment: string,
    manager: EntityManager
  ) {
    const repository = manager
      ? manager.getRepository(InvoiceInvoiceStatus)
      : this.invoiceInvoiceStatusRepository;

    await repository.save({
      invoice: { id: invoiceId },
      invoiceStatusId: invoiceStatusId,
      invoiceStatus: { id: invoiceStatusId },
      user: { id: userId },
      comment,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
