import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductItemInput } from './dto/create-invoice-product-item.input';
import { UpdateInvoiceProductItemInput } from './dto/update-invoice-product-item.input';
import { EntityManager, FindManyOptions, Repository } from 'typeorm';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class InvoiceProductItemService {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>
  ) {}

  create(createInvoiceProductItemInput: CreateInvoiceProductItemInput) {
    return 'This action adds a new invoiceProductItem';
  }

  async findAll(options: FindManyOptions<InvoiceProductItem>) {
    return await this.invoiceProductItemRepository.find(options);
  }

  async findOne(options: FindOneOptions<InvoiceProductItem>) {
    return await this.invoiceProductItemRepository.findOne(options);
  }

  update(
    id: number,
    updateInvoiceProductItemInput: UpdateInvoiceProductItemInput
  ) {
    return `This action updates a #${id} invoiceProductItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoiceProductItem`;
  }

  async save(invoiceProductItem: InvoiceProductItem, manage?: EntityManager) {
    const repository = manage
      ? manage.getRepository(InvoiceProductItem)
      : this.invoiceProductItemRepository;
    return await repository.save(invoiceProductItem);
  }
}
