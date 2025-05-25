import { Injectable } from '@nestjs/common';
import { CreateInvoiceHistoryInput } from './dto/create-invoice-history.input';
import { UpdateInvoiceHistoryInput } from './dto/update-invoice-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { SaveInvoiceHistoryProvider } from '@/modules/invoice-history/providers/save-invoice-history.provider';

@Injectable()
export class InvoiceHistoryService {
  constructor(
    /**
     * inject invoiceHistoryRepository
     */
    @InjectRepository(InvoiceHistory)
    private readonly invoiceHistoryRepository: Repository<InvoiceHistory>,

    /**
     * inject saveInvoiceHistoryProvider
     */
    private readonly saveInvoiceHistoryProvider: SaveInvoiceHistoryProvider
  ) {}

  create(createInvoiceHistoryInput: CreateInvoiceHistoryInput) {
    return 'This action adds a new invoiceHistory';
  }

  findAll() {
    return `This action returns all invoiceHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceHistory`;
  }

  update(id: number, updateInvoiceHistoryInput: UpdateInvoiceHistoryInput) {
    return `This action updates a #${id} invoiceHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceHistory`;
  }

  async userInvoiceHistories(userId: number) {
    return await this.invoiceHistoryRepository.find({
      where: {
        invoice: {
          userId,
        },
      },
      relations: ['invoice', 'editorUser'],
    });
  }

  async saveInvoiceHistory(
    invoice: Invoice,
    userId: number | null,
    manager?: EntityManager
  ) {
    return await this.saveInvoiceHistoryProvider.saveInvoiceHistory(
      invoice,
      userId,
      manager
    );
  }
}
