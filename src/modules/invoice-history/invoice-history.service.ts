import { Injectable } from '@nestjs/common';
import { CreateInvoiceHistoryInput } from './dto/create-invoice-history.input';
import { UpdateInvoiceHistoryInput } from './dto/update-invoice-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';

@Injectable()
export class InvoiceHistoryService {
  constructor(
    /**
     * inject invoiceHistoryRepository
     */
    @InjectRepository(InvoiceHistory)
    private readonly invoiceHistoryRepository: Repository<InvoiceHistory>,
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

  async invoiceHistoryForTransactionHistory(id: number) {
    return await this.invoiceHistoryRepository.find({
      where: { userId: id },
      relations: [
        'invoice',
        'invoice.currentInvoiceStatus',
        'invoice.invoicePaymentStatus',
        'invoicePaymentHistories',
      ],
    });
  }
}
