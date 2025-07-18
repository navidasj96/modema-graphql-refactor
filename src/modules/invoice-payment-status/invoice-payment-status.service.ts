import { Injectable } from '@nestjs/common';
import { CreateInvoicePaymentStatusInput } from './dto/create-invoice-payment-status.input';
import { UpdateInvoicePaymentStatusInput } from './dto/update-invoice-payment-status.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoicePaymentStatus } from '@/modules/invoice-payment-status/entities/invoice-payment-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicePaymentStatusService {
  constructor(
    /**
     * inject invoicePaymentStatusRepository
     */
    @InjectRepository(InvoicePaymentStatus)
    private readonly invoicePaymentStatusRepository: Repository<InvoicePaymentStatus>
  ) {}
  create(createInvoicePaymentStatusInput: CreateInvoicePaymentStatusInput) {
    return 'This action adds a new invoicePaymentStatus';
  }

  findAll() {
    return `This action returns all invoicePaymentStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoicePaymentStatus`;
  }

  update(
    id: number,
    updateInvoicePaymentStatusInput: UpdateInvoicePaymentStatusInput
  ) {
    return `This action updates a #${id} invoicePaymentStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoicePaymentStatus`;
  }
}
