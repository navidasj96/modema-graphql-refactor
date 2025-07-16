import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { InvoiceProductItemService } from './invoice-product-item.service';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UpdateInvoiceProductItemsOutput } from '@/modules/invoice-product-item/dto/update-invoice-product-items.output.dto';
import { UpdateInvoiceProductItemsInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items.input.dto';
import { GeneralResponseDto } from '@/utils/general-response.dto';
import { UpdateInvoiceProductItemsRollIdInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items-roll-id.input';
import { SubmitInvoiceProductDamageInput } from '@/modules/invoice-product-item/dto/submit-invoice-product-damage.input';
import { InvoiceProductItemsListInput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.input';
import { InvoiceProductItemsListOutput } from '@/modules/invoice-product-item/dto/invoice-product-items-list.output';
import { InvoiceProductItemRipToPrintInput } from '@/modules/invoice-product/dto/invoice-product-items-rip-to-print.input';
import { InvoiceProductItemsRipToPrintListOutput } from '@/modules/invoice-product-item/dto/invoice-product-items-rip-to-print-list.output';
import { UpdateInvoiceProductItemRipToPrintInput } from '@/modules/invoice-product-item/dto/update-invoice-product-item-rip-to-print.input';
import { CancelDepotInvoiceItemInput } from '@/modules/invoice-product-item/dto/cancel-depot-invoice-item.input';
import { CreateNewInvoiceItemForDepotInput } from '@/modules/invoice-product-item/dto/create-new-invoice-item-for-depot.input';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { SearchInvoiceProductItemForReplacementListInput } from '@/modules/invoice-product-item/dto/search-invoice-product-item-for-replacement-list.input';

@Resolver(() => InvoiceProductItem)
export class InvoiceProductItemResolver {
  constructor(
    private readonly invoiceProductItemService: InvoiceProductItemService
  ) {}

  @Mutation(() => UpdateInvoiceProductItemsOutput)
  async updateInvoiceProductItems(
    @Args('updateInvoiceItems', { type: () => UpdateInvoiceProductItemsInput })
    updateInvoiceItemsInput: UpdateInvoiceProductItemsInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.invoiceProductItemService.updateInvoiceProductItems(
      context,
      updateInvoiceItemsInput
    );
  }

  @Mutation(() => GeneralResponseDto)
  async updateInvoiceProductItemsRollId(
    @Args('updateInvoiceProductItemsRollId', {
      type: () => UpdateInvoiceProductItemsRollIdInput,
    })
    updateInvoiceProductItemsRollId: UpdateInvoiceProductItemsRollIdInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.invoiceProductItemService.updateInvoiceProductItemsRollId(
      context,
      updateInvoiceProductItemsRollId
    );
  }

  @Mutation(() => GeneralResponseDto)
  async submitDamagedInvoiceItems(
    @Args('submitDamagedInvoiceItems', {
      type: () => SubmitInvoiceProductDamageInput,
    })
    submitInvoiceProductDamageInput: SubmitInvoiceProductDamageInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.invoiceProductItemService.submitDamagedInvoiceItems(
      context,
      submitInvoiceProductDamageInput
    );
  }

  @Query(() => InvoiceProductItemsListOutput)
  async invoiceProductItemsList(
    @Args('invoiceProductItemsListInput', {
      type: () => InvoiceProductItemsListInput,
    })
    invoiceProductItemsListInput: InvoiceProductItemsListInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.invoiceProductItemService.invoiceProductItemsList(
      context,
      invoiceProductItemsListInput
    );
  }

  @Query(() => InvoiceProductItemsRipToPrintListOutput)
  async invoiceProductItemsRipToPrintList(
    @Args('invoiceProductItemsListInput', {
      type: () => InvoiceProductItemRipToPrintInput,
    })
    invoiceProductItemsListInput: InvoiceProductItemRipToPrintInput,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.invoiceProductItemService.invoiceProductItemsRipToPrintList(
      context,
      invoiceProductItemsListInput
    );
  }

  @Mutation(() => GeneralResponseDto)
  async updateInvoiceProductItemRipToPrint(
    @Args('updateInvoiceProductItemRipToPrintInput', {
      type: () => UpdateInvoiceProductItemRipToPrintInput,
    })
    updateInvoiceProductItemRipToPrintInput: UpdateInvoiceProductItemRipToPrintInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.invoiceProductItemService.updateInvoiceProductItemRipToPrint(
      context,
      updateInvoiceProductItemRipToPrintInput
    );
  }

  @Mutation(() => GeneralResponseDto)
  async cancelDepotInvoiceItem(
    @Args('cancelDepotInvoiceItemInput', {
      type: () => CancelDepotInvoiceItemInput,
    })
    cancelDepotInvoiceItemInput: CancelDepotInvoiceItemInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.invoiceProductItemService.cancelDepotInvoiceItem(
      context,
      cancelDepotInvoiceItemInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([
    InvoiceProductItemPermissions.PERMISSION_TO_VIEW,
    InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_BEGIN_PRODUCTION,
    InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_PRINT_AND_HEAT,
    InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRINT_AND_HEAT,
  ])
  @Mutation(() => GeneralResponseDto)
  async createNewInvoiceItemForDepot(
    @Args('createNewInvoiceItemForDepotInput', {
      type: () => CreateNewInvoiceItemForDepotInput,
    })
    createNewInvoiceItemForDepotInput: CreateNewInvoiceItemForDepotInput,
    @Context()
    context: { req: UserContext }
  ) {
    return await this.invoiceProductItemService.createNewInvoiceItemForDepot(
      createNewInvoiceItemForDepotInput,
      context
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([
    InvoiceProductItemPermissions.PERMISSION_TO_VIEW,
    InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_BEGIN_PRODUCTION,
    InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_PRINT_AND_HEAT,
    InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRINT_AND_HEAT,
  ])
  @Query(() => [InvoiceProductItem])
  async searchInvoiceProductItemForReplacementList(
    @Args('searchInvoiceProductItemForReplacementListInput', {
      type: () => SearchInvoiceProductItemForReplacementListInput,
    })
    searchInvoiceProductItemForReplacementListInput: SearchInvoiceProductItemForReplacementListInput
  ) {
    return await this.invoiceProductItemService.searchInvoiceProductItemForReplacementList(
      searchInvoiceProductItemForReplacementListInput
    );
  }
}
