import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductItemInput } from './dto/create-invoice-product-item.input';
import { UpdateInvoiceProductItemInput } from './dto/update-invoice-product-item.input';
import { EntityManager, IsNull, Repository } from 'typeorm';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

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

  findAll() {
    return `This action returns all invoiceProductItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoiceProductItem`;
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

  async updateCurrentStatusId(
    invoiceProductItem: InvoiceProductItem,
    statusId: number,
    manager?: EntityManager
  ) {
    const repository = manager
      ? manager.getRepository(InvoiceProductItem)
      : this.invoiceProductItemRepository;
    invoiceProductItem.currentStatusId = statusId;
    return await repository.save(invoiceProductItem);
  }

  async getNonDepotInvoiceProductItems(
    invoiceProductId: number,
    itemsToProduce?: number
  ) {
    return await this.invoiceProductItemRepository.find({
      where: { invoiceProductId, fromDepot: IsNull() },
      ...(itemsToProduce && { take: itemsToProduce }),
    });
  }

  async save(invoiceProductItem: InvoiceProductItem, manage?: EntityManager) {
    const repository = manage
      ? manage.getRepository(InvoiceProductItem)
      : this.invoiceProductItemRepository;
    return await repository.save(invoiceProductItem);
  }
}
