import { Injectable } from '@nestjs/common';
import { CreateInvoiceProductItemInput } from './dto/create-invoice-product-item.input';
import { UpdateInvoiceProductItemInput } from './dto/update-invoice-product-item.input';
import { EntityManager, FindManyOptions, Repository } from 'typeorm';
import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UpdateInvoiceProductItemsInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items.input.dto';
import { UpdateInvoiceProductItemsProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-items.provider';
import { UpdateInvoiceProductItemsRollIdProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-items-roll-id.provider';
import { UpdateInvoiceProductItemsRollIdInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items-roll-id.input';
import { DamagedInvoiceItemsControllerProvider } from '@/modules/invoice-product-item/providers/damaged-invoice-items-controller.provider';
import { SubmitInvoiceProductDamageInput } from '@/modules/invoice-product-item/dto/submit-invoice-product-damage.input';
import { InvoiceProductItemsListProvider } from '@/modules/invoice-product-item/providers/invoice-product-items-list.provider';
import { InvoiceProductItemsListInput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.input';
import { InvoiceProductItemsRipToPrintListProvider } from '@/modules/invoice-product-item/providers/invoice-product-items-rip-to-print-list.provider';
import { InvoiceProductItemRipToPrintInput } from '@/modules/invoice-product/dto/invoice-product-items-rip-to-print.input';

@Injectable()
export class InvoiceProductItemService {
  constructor(
    /**
     * inject invoiceProductItemRepository
     */
    @InjectRepository(InvoiceProductItem)
    private readonly invoiceProductItemRepository: Repository<InvoiceProductItem>,
    /**
     * inject pdateInvoiceItemsProvider
     */
    private readonly updateInvoiceProductItemsProvider: UpdateInvoiceProductItemsProvider,

    /**
     * inject updateInvoiceProductItemsRollIdProvider
     */
    private readonly updateInvoiceProductItemsRollIdProvider: UpdateInvoiceProductItemsRollIdProvider,

    /**
     * inject damagedInvoiceItemControllerProvider
     */
    private readonly damagedInvoiceItemControllerProvider: DamagedInvoiceItemsControllerProvider,
    /**
     * inject invoiceProductItemsListProvider
     */
    private readonly invoiceProductItemsListProvider: InvoiceProductItemsListProvider,
    /**
     * inject invoiceProductItemsRipToPrintListProvider
     */
    private readonly invoiceProductItemsRipToPrintListProvider: InvoiceProductItemsRipToPrintListProvider
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

  async updateInvoiceProductItems(
    context: { req: UserContext },
    updateInvoiceItemsInput: UpdateInvoiceProductItemsInput
  ) {
    return await this.updateInvoiceProductItemsProvider.updateInvoiceProductItems(
      context,
      updateInvoiceItemsInput
    );
  }

  async updateInvoiceProductItemsRollId(
    context: { req: UserContext },
    updateInvoiceProductItemsRollIdInput: UpdateInvoiceProductItemsRollIdInput
  ) {
    return await this.updateInvoiceProductItemsRollIdProvider.updateInvoiceProductItemsRollId(
      context,
      updateInvoiceProductItemsRollIdInput
    );
  }

  async submitDamagedInvoiceItems(
    context: { req: UserContext },
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput
  ) {
    return await this.damagedInvoiceItemControllerProvider.submitDamagedInvoiceItems(
      context,
      submitInvoiceProductDamageInput
    );
  }

  async invoiceProductItemsList(
    context: {
      req: UserContext;
    },
    invoiceProductItemsListInput: InvoiceProductItemsListInput
  ) {
    return await this.invoiceProductItemsListProvider.invoiceProductItemsList(
      context,
      invoiceProductItemsListInput
    );
  }

  async invoiceProductItemsRipToPrintList(
    context: { req: UserContext },
    invoiceProductItemsListInput: InvoiceProductItemRipToPrintInput
  ) {
    return await this.invoiceProductItemsRipToPrintListProvider.invoiceProductItemsRipToPrintList(
      context,
      invoiceProductItemsListInput
    );
  }
}
