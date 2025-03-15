import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceReversalService } from './invoice-reversal.service';
import { CreateInvoiceReversalInput } from './dto/create-invoice-reversal.input';
import { UpdateInvoiceReversalInput } from './dto/update-invoice-reversal.input';
import { InvoiceReversal } from '@/modules/invoice-reversal/domain/invoice-reversal';

@Resolver(() => InvoiceReversal)
export class InvoiceReversalResolver {
  constructor(
    private readonly invoiceReversalService: InvoiceReversalService,
  ) {}

  @Mutation(() => InvoiceReversal)
  createInvoiceReversal(
    @Args('createInvoiceReversalInput')
    createInvoiceReversalInput: CreateInvoiceReversalInput,
  ) {
    return this.invoiceReversalService.create(createInvoiceReversalInput);
  }

  @Query(() => [InvoiceReversal], { name: 'invoiceReversal' })
  findAll() {
    return this.invoiceReversalService.findAll();
  }

  @Query(() => InvoiceReversal, { name: 'invoiceReversal' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceReversalService.findOne(id);
  }

  @Mutation(() => InvoiceReversal)
  updateInvoiceReversal(
    @Args('updateInvoiceReversalInput')
    updateInvoiceReversalInput: UpdateInvoiceReversalInput,
  ) {
    return this.invoiceReversalService.update(
      updateInvoiceReversalInput.id,
      updateInvoiceReversalInput,
    );
  }

  @Mutation(() => InvoiceReversal)
  removeInvoiceReversal(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceReversalService.remove(id);
  }
}
