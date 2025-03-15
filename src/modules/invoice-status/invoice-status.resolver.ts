import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceStatusService } from './invoice-status.service';
import { CreateInvoiceStatusInput } from './dto/create-invoice-status.input';
import { UpdateInvoiceStatusInput } from './dto/update-invoice-status.input';
import { InvoiceStatus } from '@/modules/invoice-status/domain/invoice-status';

@Resolver(() => InvoiceStatus)
export class InvoiceStatusResolver {
  constructor(private readonly invoiceStatusService: InvoiceStatusService) {}

  @Mutation(() => InvoiceStatus)
  createInvoiceStatus(
    @Args('createInvoiceStatusInput')
    createInvoiceStatusInput: CreateInvoiceStatusInput,
  ) {
    return this.invoiceStatusService.create(createInvoiceStatusInput);
  }

  @Query(() => [InvoiceStatus], { name: 'invoiceStatus' })
  findAll() {
    return this.invoiceStatusService.findAll();
  }

  @Query(() => InvoiceStatus, { name: 'invoiceStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceStatusService.findOne(id);
  }

  @Mutation(() => InvoiceStatus)
  updateInvoiceStatus(
    @Args('updateInvoiceStatusInput')
    updateInvoiceStatusInput: UpdateInvoiceStatusInput,
  ) {
    return this.invoiceStatusService.update(
      updateInvoiceStatusInput.id,
      updateInvoiceStatusInput,
    );
  }

  @Mutation(() => InvoiceStatus)
  removeInvoiceStatus(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceStatusService.remove(id);
  }
}
