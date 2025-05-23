import { Injectable } from '@nestjs/common';
import { CreateInvoicePaymentInput } from './dto/create-invoice-payment.input';
import { UpdateInvoicePaymentInput } from './dto/update-invoice-payment.input';
import { Repository } from 'typeorm';
import { InvoicePayment } from '@/modules/invoice-payment/entities/invoice-payment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoicePaymentService {
  constructor(
    /**
     * inject invoicePaymentRepository
     */
    @InjectRepository(InvoicePayment)
    private readonly invoicePaymentRepository: Repository<InvoicePayment>
  ) {}

  create(createInvoicePaymentInput: CreateInvoicePaymentInput) {
    return 'This action adds a new invoicePayment';
  }

  findAll() {
    return `This action returns all invoicePayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicePayment`;
  }

  update(id: number, updateInvoicePaymentInput: UpdateInvoicePaymentInput) {
    return `This action updates a #${id} invoicePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoicePayment`;
  }

  async totalPaidForProducts(invoiceId: number) {
    return await this.invoicePaymentRepository.sum('amount', {
      invoiceId,
      forShipping: 0,
      isConfirmed: 1,
    });
  }
}
