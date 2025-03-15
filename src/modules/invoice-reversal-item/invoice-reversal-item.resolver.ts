import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceReversalItemService } from './invoice-reversal-item.service';
import { CreateInvoiceReversalItemInput } from './dto/create-invoice-reversal-item.input';
import { UpdateInvoiceReversalItemInput } from './dto/update-invoice-reversal-item.input';
import { InvoiceReversalItem } from '@/modules/invoice-reversal-item/domain/invoice-reversal-item';

@Resolver(() => InvoiceReversalItem)
export class InvoiceReversalItemResolver {
  constructor(
    private readonly invoiceReversalItemService: InvoiceReversalItemService,
  ) {}

  @Mutation(() => InvoiceReversalItem)
  createInvoiceReversalItem(
    @Args('createInvoiceReversalItemInput')
    createInvoiceReversalItemInput: CreateInvoiceReversalItemInput,
  ) {
    return this.invoiceReversalItemService.create(
      createInvoiceReversalItemInput,
    );
  }

  @Query(() => [InvoiceReversalItem], { name: 'invoiceReversalItem' })
  findAll() {
    return this.invoiceReversalItemService.findAll();
  }

  @Query(() => InvoiceReversalItem, { name: 'invoiceReversalItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceReversalItemService.findOne(id);
  }

  @Mutation(() => InvoiceReversalItem)
  updateInvoiceReversalItem(
    @Args('updateInvoiceReversalItemInput')
    updateInvoiceReversalItemInput: UpdateInvoiceReversalItemInput,
  ) {
    return this.invoiceReversalItemService.update(
      updateInvoiceReversalItemInput.id,
      updateInvoiceReversalItemInput,
    );
  }

  @Mutation(() => InvoiceReversalItem)
  removeInvoiceReversalItem(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceReversalItemService.remove(id);
  }
}
