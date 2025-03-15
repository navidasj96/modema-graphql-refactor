import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceHistoryService } from './invoice-history.service';
import { CreateInvoiceHistoryInput } from './dto/create-invoice-history.input';
import { UpdateInvoiceHistoryInput } from './dto/update-invoice-history.input';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';

@Resolver(() => InvoiceHistory)
export class InvoiceHistoryResolver {
  constructor(private readonly invoiceHistoryService: InvoiceHistoryService) {}

  @Mutation(() => InvoiceHistory)
  createInvoiceHistory(
    @Args('createInvoiceHistoryInput')
    createInvoiceHistoryInput: CreateInvoiceHistoryInput,
  ) {
    return this.invoiceHistoryService.create(createInvoiceHistoryInput);
  }

  @Query(() => [InvoiceHistory], { name: 'invoiceHistory' })
  findAll() {
    return this.invoiceHistoryService.findAll();
  }

  @Query(() => InvoiceHistory, { name: 'invoiceHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceHistoryService.findOne(id);
  }

  @Mutation(() => InvoiceHistory)
  updateInvoiceHistory(
    @Args('updateInvoiceHistoryInput')
    updateInvoiceHistoryInput: UpdateInvoiceHistoryInput,
  ) {
    return this.invoiceHistoryService.update(
      updateInvoiceHistoryInput.id,
      updateInvoiceHistoryInput,
    );
  }

  @Mutation(() => InvoiceHistory)
  removeInvoiceHistory(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceHistoryService.remove(id);
  }
}
