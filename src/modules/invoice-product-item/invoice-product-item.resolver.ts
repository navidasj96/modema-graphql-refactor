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

  @Query(() => [InvoiceProductItem])
  async invoiceProductItemsList(
    @Args('invoiceProductItemsListInput', {
      type: () => InvoiceProductItemsListInput,
    })
    invoiceProductItemsListInput: InvoiceProductItemsListInput
  ) {
    return await this.invoiceProductItemService.invoiceProductItemsList(
      invoiceProductItemsListInput
    );
  }
}
