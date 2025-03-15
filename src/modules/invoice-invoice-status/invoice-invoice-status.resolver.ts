import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceInvoiceStatusService } from './invoice-invoice-status.service';
import { CreateInvoiceInvoiceStatusInput } from './dto/create-invoice-invoice-status.input';
import { UpdateInvoiceInvoiceStatusInput } from './dto/update-invoice-invoice-status.input';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status';

@Resolver(() => InvoiceInvoiceStatus)
export class InvoiceInvoiceStatusResolver {
  constructor(
    private readonly invoiceInvoiceStatusService: InvoiceInvoiceStatusService,
  ) {}

  @Mutation(() => InvoiceInvoiceStatus)
  createInvoiceInvoiceStatus(
    @Args('createInvoiceInvoiceStatusInput')
    createInvoiceInvoiceStatusInput: CreateInvoiceInvoiceStatusInput,
  ) {
    return this.invoiceInvoiceStatusService.create(
      createInvoiceInvoiceStatusInput,
    );
  }

  @Query(() => [InvoiceInvoiceStatus], { name: 'invoiceInvoiceStatus' })
  findAll() {
    return this.invoiceInvoiceStatusService.findAll();
  }

  @Query(() => InvoiceInvoiceStatus, { name: 'invoiceInvoiceStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceInvoiceStatusService.findOne(id);
  }

  @Mutation(() => InvoiceInvoiceStatus)
  updateInvoiceInvoiceStatus(
    @Args('updateInvoiceInvoiceStatusInput')
    updateInvoiceInvoiceStatusInput: UpdateInvoiceInvoiceStatusInput,
  ) {
    return this.invoiceInvoiceStatusService.update(
      updateInvoiceInvoiceStatusInput.id,
      updateInvoiceInvoiceStatusInput,
    );
  }

  @Mutation(() => InvoiceInvoiceStatus)
  removeInvoiceInvoiceStatus(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceInvoiceStatusService.remove(id);
  }
}
