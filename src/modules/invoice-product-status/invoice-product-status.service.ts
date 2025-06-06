import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductStatusInput } from './dto/create-invoice-product-status.input';
import { UpdateInvoiceProductStatusInput } from './dto/update-invoice-product-status.input';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/entities/invoice-product-status.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class InvoiceProductStatusService {
  constructor(
    /**
     * inject invoiceProductStatusRepository
     */
    @InjectRepository(InvoiceProductStatus)
    private readonly invoiceProductStatusRepository: Repository<InvoiceProductStatus>
  ) {}

  create(createInvoiceProductStatusInput: CreateInvoiceProductStatusInput) {
    return 'This action adds a new invoiceProductStatus';
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductStatus`;
  }

  update(
    id: number,
    updateInvoiceProductStatusInput: UpdateInvoiceProductStatusInput
  ) {
    return `This action updates a #${id} invoiceProductStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductStatus`;
  }

  async findAll(options: FindManyOptions<InvoiceProductStatus>) {
    return await this.invoiceProductStatusRepository.find(options);
  }
}
