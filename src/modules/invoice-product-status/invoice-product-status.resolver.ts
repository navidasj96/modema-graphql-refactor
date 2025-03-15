import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceProductStatusService } from './invoice-product-status.service';
import { CreateInvoiceProductStatusInput } from './dto/create-invoice-product-status.input';
import { UpdateInvoiceProductStatusInput } from './dto/update-invoice-product-status.input';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/domain/invoice-product-status';

@Resolver(() => InvoiceProductStatus)
export class InvoiceProductStatusResolver {
  constructor(
    private readonly invoiceProductStatusService: InvoiceProductStatusService,
  ) {}

  @Mutation(() => InvoiceProductStatus)
  createInvoiceProductStatus(
    @Args('createInvoiceProductStatusInput')
    createInvoiceProductStatusInput: CreateInvoiceProductStatusInput,
  ) {
    return this.invoiceProductStatusService.create(
      createInvoiceProductStatusInput,
    );
  }

  @Query(() => [InvoiceProductStatus], { name: 'invoiceProductStatus' })
  findAll() {
    return this.invoiceProductStatusService.findAll();
  }

  @Query(() => InvoiceProductStatus, { name: 'invoiceProductStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductStatusService.findOne(id);
  }

  @Mutation(() => InvoiceProductStatus)
  updateInvoiceProductStatus(
    @Args('updateInvoiceProductStatusInput')
    updateInvoiceProductStatusInput: UpdateInvoiceProductStatusInput,
  ) {
    return this.invoiceProductStatusService.update(
      updateInvoiceProductStatusInput.id,
      updateInvoiceProductStatusInput,
    );
  }

  @Mutation(() => InvoiceProductStatus)
  removeInvoiceProductStatus(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductStatusService.remove(id);
  }
}
