import { Injectable } from '@nestjs/common';

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
import { UpdateInvoiceProductItemRipToPrintProvider } from '@/modules/invoice-product-item/providers/update-invoice-product-item-rip-to-print.provider';
import { UpdateInvoiceProductItemRipToPrintInput } from '@/modules/invoice-product-item/dto/update-invoice-product-item-rip-to-print.input';
import { CancelDepotInvoiceItemProvider } from '@/modules/invoice-product-item/providers/cancel-depot-invoice-item.provider';
import { CancelDepotInvoiceItemInput } from '@/modules/invoice-product-item/dto/cancel-depot-invoice-item.input';
import { CreateNewInvoiceItemForDepotProvider } from '@/modules/invoice-product-item/providers/create-new-invoice-item-for-depot.provider';
import { CreateNewInvoiceItemForDepotInput } from '@/modules/invoice-product-item/dto/create-new-invoice-item-for-depot.input';
import { SearchInvoiceProductItemForReplacementListInput } from '@/modules/invoice-product-item/dto/search-invoice-product-item-for-replacement-list.input';
import { InvoiceItemReplaceProvider } from '@/modules/invoice-product-item/providers/invoice-item-replace.provider';
import { InvoiceItemReplaceUpdateInput } from '@/modules/invoice-product-item/dto/invoice-item-replace-update.input';
import { InvoiceItemsPrintToHeatProvider } from '@/modules/invoice-product-item/providers/invoice-items-print-to-heat.provider';
import { InvoiceItemsPrintToHeatListInput } from '@/modules/invoice-product-item/dto/invoice-items-print-to-heat-list.input';
import { MoveBackInvoiceItemToRipInput } from '@/modules/invoice-product-item/dto/move-back-invoice-item-to-rip.input';
import { UpdateInvoiceProductItemPrintToHeatInput } from '@/modules/invoice-product-item/dto/update-invoice-product-item-print-to-heat.input';
import { PrintItemTagProvider } from '@/modules/invoice-product-item/providers/print-item-tag.provider';
import { PrintItemTagListInput } from '@/modules/invoice-product-item/dto/print-item-tag-list.input';
import { ConfirmTagsPrintedInput } from '@/modules/invoice-product-item/dto/confirm-tags-printed.input';
import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { NOT_SENT_INVOICE_STATUSES } from '../../utils/invoice-status';

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
    private readonly invoiceProductItemsRipToPrintListProvider: InvoiceProductItemsRipToPrintListProvider,
    /**
     * inject updateInvoiceProductItemRipToPrintProvider
     */
    private readonly updateInvoiceProductItemRipToPrintProvider: UpdateInvoiceProductItemRipToPrintProvider,
    /**
     * inject cancelDepotInvoiceItemProvider
     */
    private readonly cancelDepotInvoiceItemProvider: CancelDepotInvoiceItemProvider,
    /**
     * private readonly createNewInvoiceItemForDepotProvider
     */
    private readonly createNewInvoiceItemForDepotProvider: CreateNewInvoiceItemForDepotProvider,
    /**
     * inject invoiceItemReplaceProvider
     */
    private readonly invoiceItemReplaceProvider: InvoiceItemReplaceProvider,
    /**
     * inject invoiceItemsPrintToHeatProvider
     */
    private readonly invoiceItemsPrintToHeatProvider: InvoiceItemsPrintToHeatProvider,
    /**
     * inject printItemTagProvider
     */
    private readonly printItemTagProvider: PrintItemTagProvider
  ) {}

  async findAll(options: FindManyOptions<InvoiceProductItem>) {
    return await this.invoiceProductItemRepository.find(options);
  }

  async findOne(options: FindOneOptions<InvoiceProductItem>) {
    return await this.invoiceProductItemRepository.findOne(options);
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

  async updateInvoiceProductItemRipToPrint(
    context: { req: UserContext },
    updateInvoiceProductItemRipToPrintInput: UpdateInvoiceProductItemRipToPrintInput
  ) {
    return await this.updateInvoiceProductItemRipToPrintProvider.updateInvoiceProductItemRipToPrint(
      context,
      updateInvoiceProductItemRipToPrintInput
    );
  }

  async cancelDepotInvoiceItem(
    context: { req: UserContext },
    cancelDepotInvoiceItemInput: CancelDepotInvoiceItemInput
  ) {
    return await this.cancelDepotInvoiceItemProvider.cancelDepotInvoiceItem(
      context,
      cancelDepotInvoiceItemInput
    );
  }

  async createNewInvoiceItemForDepot(
    createNewInvoiceItemForDepotInput: CreateNewInvoiceItemForDepotInput,
    context: { req: UserContext }
  ) {
    return await this.createNewInvoiceItemForDepotProvider.addNewSubproductForDepot(
      createNewInvoiceItemForDepotInput,
      context
    );
  }

  async searchInvoiceProductItemForReplacementList(
    searchInvoiceProductItemForReplacementListInput: SearchInvoiceProductItemForReplacementListInput
  ) {
    return await this.invoiceItemReplaceProvider.searchInvoiceProductItemForReplacementList(
      searchInvoiceProductItemForReplacementListInput
    );
  }

  async invoiceItemsReplaceUpdate(
    invoiceItemReplaceUpdateInput: InvoiceItemReplaceUpdateInput
  ) {
    return await this.invoiceItemReplaceProvider.update(
      invoiceItemReplaceUpdateInput
    );
  }

  async invoiceItemsPrintToHeatList(
    invoiceItemsPrintToHeatListInput: InvoiceItemsPrintToHeatListInput
  ) {
    return await this.invoiceItemsPrintToHeatProvider.invoiceItemsPrintToHeatList(
      invoiceItemsPrintToHeatListInput
    );
  }

  async moveBackInvoiceItemToRip(
    context: { req: UserContext },
    moveBackInvoiceItemToRipInput: MoveBackInvoiceItemToRipInput
  ) {
    return await this.invoiceItemsPrintToHeatProvider.moveBackInvoiceItemToRip(
      context,
      moveBackInvoiceItemToRipInput
    );
  }

  async invoiceItemsPrintToHeatUpdate(
    context: { req: UserContext },
    updateInvoiceProductItemPrintToHeatInput: UpdateInvoiceProductItemPrintToHeatInput
  ) {
    return await this.invoiceItemsPrintToHeatProvider.updateInvoiceItems(
      context,
      updateInvoiceProductItemPrintToHeatInput
    );
  }

  async printItemTagList(printItemTagListInput: PrintItemTagListInput) {
    return await this.printItemTagProvider.itemsList(printItemTagListInput);
  }

  async confirmTagsPrinted(
    context: { req: UserContext },
    confirmTagsPrintedInput: ConfirmTagsPrintedInput
  ) {
    return await this.printItemTagProvider.confirmTagsPrinted(
      context,
      confirmTagsPrintedInput
    );
  }

  async invoiceProductItemForPrintProductTag(productionRollId: number) {
    const invoiceProductItems = await this.invoiceProductItemRepository
      .createQueryBuilder('invoiceProductItem')

      .select('invoiceProductItem')
      // Join once and reuse the alias
      .innerJoin('invoiceProductItem.invoiceProduct', 'invoiceProduct')

      // Now continue joining from 'invoiceProduct'
      .innerJoinAndSelect('invoiceProduct.subproduct', 'subproduct')
      .innerJoinAndSelect('invoiceProduct.invoice', 'invoice')
      .innerJoinAndSelect('invoice.address', 'invoiceAddress')
      .innerJoinAndSelect('invoice.user', 'invoiceUser')
      .innerJoinAndSelect('invoiceUser.invoices', 'userInvoices')
      .innerJoinAndSelect('userInvoices.invoiceProducts', 'userInvoiceProducts')
      .innerJoinAndSelect(
        'userInvoiceProducts.subproduct',
        'userInvoiceSubproduct'
      )
      .innerJoinAndSelect('invoiceAddress.state', 'state')
      .innerJoinAndSelect('invoiceAddress.city', 'city')
      .innerJoinAndSelect('invoiceProduct.product', 'product')
      .innerJoinAndSelect('product.image', 'productImage')
      .innerJoinAndSelect('subproduct.image', 'subproductImage')
      .innerJoinAndSelect('subproduct.basicCarpetSize', 'basicCarpetSize')
      .innerJoinAndSelect('subproduct.basicCarpetColor', 'basicCarpetColor')

      // Pivot join
      .innerJoinAndSelect(
        'invoiceProductItem.invoiceProductItemInvoiceProductStatuses',
        'invoiceProductItemInvoiceProductStatuses'
      )
      .innerJoinAndSelect(
        'invoiceProductItemInvoiceProductStatuses.invoiceProductStatus',
        'invoiceProductStatus'
      )
      .where('invoiceProductItem.productionRollId = :productionRollId', {
        productionRollId,
      })
      .andWhere(
        'userInvoices.currentInvoiceStatusId IN (:...currentInvoiceStatusId)',
        {
          currentInvoiceStatusId: NOT_SENT_INVOICE_STATUSES,
        }
      )
      .orderBy('invoiceProductItem.tagSortOrder', 'ASC')
      .addOrderBy('subproduct.width * subproduct.length', 'DESC')
      .addOrderBy('invoiceProductItem.updatedAt', 'ASC')
      .getMany();

    return invoiceProductItems;
  }
}
