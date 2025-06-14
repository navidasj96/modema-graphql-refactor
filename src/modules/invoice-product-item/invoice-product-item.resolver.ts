import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { InvoiceProductItemService } from './invoice-product-item.service';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { UpdateInvoiceProductItemsOutput } from '@/modules/invoice-product-item/dto/update-invoice-product-items.output.dto';
import { UpdateInvoiceProductItemsInput } from '@/modules/invoice-product-item/dto/update-invoice-product-items.input.dto';

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
}
