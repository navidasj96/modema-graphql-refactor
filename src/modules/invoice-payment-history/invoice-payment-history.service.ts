import { Injectable } from '@nestjs/common';
import { CreateInvoicePaymentHistoryInput } from './dto/create-invoice-payment-history.input';
import { UpdateInvoicePaymentHistoryInput } from './dto/update-invoice-payment-history.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicePaymentHistoryService {
  constructor(
    /**
     * inject invoicePaymentHistoryRepository
     */
    @InjectRepository(InvoicePaymentHistory)
    private readonly invoicePaymentHistoryRepository: Repository<InvoicePaymentHistory>,
  ) {}

  create(createInvoicePaymentHistoryInput: CreateInvoicePaymentHistoryInput) {
    return 'This action adds a new invoicePaymentHistory';
  }

  findAll() {
    return `This action returns all invoicePaymentHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicePaymentHistory`;
  }

  update(
    id: number,
    updateInvoicePaymentHistoryInput: UpdateInvoicePaymentHistoryInput,
  ) {
    return `This action updates a #${id} invoicePaymentHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoicePaymentHistory`;
  }

  async invoicePaymentHistoryForTransactionHistory(
    invoiceHistoryIds: number[],
  ) {
    return await this.invoicePaymentHistoryRepository
      .createQueryBuilder('iph')
      .where('iph.invoiceHistoryId IN (:...ids)', { ids: invoiceHistoryIds })
      .getMany();
  }
}
