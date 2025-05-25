import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceProductHistoryInput } from './dto/create-invoice-product-history.input';
import { UpdateInvoiceProductHistoryInput } from './dto/update-invoice-product-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';

@Injectable()
export class InvoiceProductHistoryService {
  constructor(
    /**
     * inject invoiceProductHistoryRepository
     */
    @InjectRepository(InvoiceProductHistory)
    private readonly invoiceProductHistoryRepository: Repository<InvoiceProductHistory>
  ) {}
  create(createInvoiceProductHistoryInput: CreateInvoiceProductHistoryInput) {
    return 'This action adds a new invoiceProductHistory';
  }

  findAll() {
    return `This action returns all invoiceProductHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductHistory`;
  }

  update(
    id: number,
    updateInvoiceProductHistoryInput: UpdateInvoiceProductHistoryInput
  ) {
    return `This action updates a #${id} invoiceProductHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductHistory`;
  }

  async save(
    invoiceProductHistory: InvoiceProductHistory,
    manager?: EntityManager
  ) {
    const repository = manager
      ? manager.getRepository(InvoiceProductHistory)
      : this.invoiceProductHistoryRepository;

    return await repository.save(invoiceProductHistory);
  }
}
