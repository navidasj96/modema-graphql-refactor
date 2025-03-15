import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoicePaymentStatusService } from './invoice-payment-status.service';
import { CreateInvoicePaymentStatusInput } from './dto/create-invoice-payment-status.input';
import { UpdateInvoicePaymentStatusInput } from './dto/update-invoice-payment-status.input';
import { InvoicePaymentStatus } from '@/modules/invoice-payment-status/domain/invoice-payment-status';

@Resolver(() => InvoicePaymentStatus)
export class InvoicePaymentStatusResolver {
  constructor(
    private readonly invoicePaymentStatusService: InvoicePaymentStatusService,
  ) {}

  @Mutation(() => InvoicePaymentStatus)
  createInvoicePaymentStatus(
    @Args('createInvoicePaymentStatusInput')
    createInvoicePaymentStatusInput: CreateInvoicePaymentStatusInput,
  ) {
    return this.invoicePaymentStatusService.create(
      createInvoicePaymentStatusInput,
    );
  }

  @Query(() => [InvoicePaymentStatus], { name: 'invoicePaymentStatus' })
  findAll() {
    return this.invoicePaymentStatusService.findAll();
  }

  @Query(() => InvoicePaymentStatus, { name: 'invoicePaymentStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentStatusService.findOne(id);
  }

  @Mutation(() => InvoicePaymentStatus)
  updateInvoicePaymentStatus(
    @Args('updateInvoicePaymentStatusInput')
    updateInvoicePaymentStatusInput: UpdateInvoicePaymentStatusInput,
  ) {
    return this.invoicePaymentStatusService.update(
      updateInvoicePaymentStatusInput.id,
      updateInvoicePaymentStatusInput,
    );
  }

  @Mutation(() => InvoicePaymentStatus)
  removeInvoicePaymentStatus(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentStatusService.remove(id);
  }
}
