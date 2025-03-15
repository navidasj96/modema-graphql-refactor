import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceModeService } from './invoice-mode.service';
import { CreateInvoiceModeInput } from './dto/create-invoice-mode.input';
import { UpdateInvoiceModeInput } from './dto/update-invoice-mode.input';
import { InvoiceMode } from '@/modules/invoice-mode/domain/invoice-mode';

@Resolver(() => InvoiceMode)
export class InvoiceModeResolver {
  constructor(private readonly invoiceModeService: InvoiceModeService) {}

  @Mutation(() => InvoiceMode)
  createInvoiceMode(
    @Args('createInvoiceModeInput')
    createInvoiceModeInput: CreateInvoiceModeInput,
  ) {
    return this.invoiceModeService.create(createInvoiceModeInput);
  }

  @Query(() => [InvoiceMode], { name: 'invoiceMode' })
  findAll() {
    return this.invoiceModeService.findAll();
  }

  @Query(() => InvoiceMode, { name: 'invoiceMode' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceModeService.findOne(id);
  }

  @Mutation(() => InvoiceMode)
  updateInvoiceMode(
    @Args('updateInvoiceModeInput')
    updateInvoiceModeInput: UpdateInvoiceModeInput,
  ) {
    return this.invoiceModeService.update(
      updateInvoiceModeInput.id,
      updateInvoiceModeInput,
    );
  }

  @Mutation(() => InvoiceMode)
  removeInvoiceMode(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceModeService.remove(id);
  }
}
