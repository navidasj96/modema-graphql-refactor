import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductItemInvoiceProductStatusInput } from './dto/create-invoice-product-item-invoice-product-status.input';
import { UpdateInvoiceProductItemInvoiceProductStatusInput } from './dto/update-invoice-product-item-invoice-product-status.input';
import { EntityManager, Repository } from 'typeorm';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/entities/invoice-product-item-invoice-product-status.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceProductItemInvoiceProductStatusService {
  constructor(
    /**
     * inject repository
     */
    @InjectRepository(InvoiceProductItemInvoiceProductStatus)
    private readonly invoiceProductItemInvoiceProductStatusRepository: Repository<InvoiceProductItemInvoiceProductStatus>
  ) {}

  create(
    createInvoiceProductItemInvoiceProductStatusInput: CreateInvoiceProductItemInvoiceProductStatusInput
  ) {
    return 'This action adds a new invoiceProductItemInvoiceProductStatus';
  }

  findAll() {
    return `This action returns all invoiceProductItemInvoiceProductStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductItemInvoiceProductStatus`;
  }

  update(
    id: number,
    updateInvoiceProductItemInvoiceProductStatusInput: UpdateInvoiceProductItemInvoiceProductStatusInput
  ) {
    return `This action updates a #${id} invoiceProductItemInvoiceProductStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductItemInvoiceProductStatus`;
  }

  //equivalent to attach in laravel for updating the pivot table
  async attach(
    invoiceProductItemId: number,
    currentStatusId: number,
    userId: number,
    comment: string | null,
    manager?: EntityManager
  ) {
    const repository = manager
      ? manager.getRepository(InvoiceProductItemInvoiceProductStatus)
      : this.invoiceProductItemInvoiceProductStatusRepository;

    await repository.save({
      invoiceProductItem: { id: invoiceProductItemId },
      InvoiceProductStatus: { id: currentStatusId },
      user: { id: userId },
      comment,
    });
  }
}
