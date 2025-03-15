import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceProductHistoryService } from './invoice-product-history.service';
import { CreateInvoiceProductHistoryInput } from './dto/create-invoice-product-history.input';
import { UpdateInvoiceProductHistoryInput } from './dto/update-invoice-product-history.input';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@Resolver(() => InvoiceProductHistory)
export class InvoiceProductHistoryResolver {
  constructor(
    private readonly invoiceProductHistoryService: InvoiceProductHistoryService,
  ) {}

  @Mutation(() => InvoiceProductHistory)
  createInvoiceProductHistory(
    @Args('createInvoiceProductHistoryInput')
    createInvoiceProductHistoryInput: CreateInvoiceProductHistoryInput,
  ) {
    return this.invoiceProductHistoryService.create(
      createInvoiceProductHistoryInput,
    );
  }

  @Query(() => [InvoiceProductHistory], { name: 'invoiceProductHistory' })
  findAll() {
    return this.invoiceProductHistoryService.findAll();
  }

  @Query(() => InvoiceProductHistory, { name: 'invoiceProductHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductHistoryService.findOne(id);
  }

  @Mutation(() => InvoiceProductHistory)
  updateInvoiceProductHistory(
    @Args('updateInvoiceProductHistoryInput')
    updateInvoiceProductHistoryInput: UpdateInvoiceProductHistoryInput,
  ) {
    return this.invoiceProductHistoryService.update(
      updateInvoiceProductHistoryInput.id,
      updateInvoiceProductHistoryInput,
    );
  }

  @Mutation(() => InvoiceProductHistory)
  removeInvoiceProductHistory(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductHistoryService.remove(id);
  }
}
