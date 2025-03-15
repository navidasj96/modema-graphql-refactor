import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceProductItemInvoiceProductStatusService } from './invoice-product-item-invoice-product-status.service';
import { CreateInvoiceProductItemInvoiceProductStatusInput } from './dto/create-invoice-product-item-invoice-product-status.input';
import { UpdateInvoiceProductItemInvoiceProductStatusInput } from './dto/update-invoice-product-item-invoice-product-status.input';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';

@Resolver(() => InvoiceProductItemInvoiceProductStatus)
export class InvoiceProductItemInvoiceProductStatusResolver {
  constructor(
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
  ) {}

  @Mutation(() => InvoiceProductItemInvoiceProductStatus)
  createInvoiceProductItemInvoiceProductStatus(
    @Args('createInvoiceProductItemInvoiceProductStatusInput')
    createInvoiceProductItemInvoiceProductStatusInput: CreateInvoiceProductItemInvoiceProductStatusInput,
  ) {
    return this.invoiceProductItemInvoiceProductStatusService.create(
      createInvoiceProductItemInvoiceProductStatusInput,
    );
  }

  @Query(() => [InvoiceProductItemInvoiceProductStatus], {
    name: 'invoiceProductItemInvoiceProductStatus',
  })
  findAll() {
    return this.invoiceProductItemInvoiceProductStatusService.findAll();
  }

  @Query(() => InvoiceProductItemInvoiceProductStatus, {
    name: 'invoiceProductItemInvoiceProductStatus',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceProductItemInvoiceProductStatusService.findOne(id);
  }

  @Mutation(() => InvoiceProductItemInvoiceProductStatus)
  updateInvoiceProductItemInvoiceProductStatus(
    @Args('updateInvoiceProductItemInvoiceProductStatusInput')
    updateInvoiceProductItemInvoiceProductStatusInput: UpdateInvoiceProductItemInvoiceProductStatusInput,
  ) {
    return this.invoiceProductItemInvoiceProductStatusService.update(
      updateInvoiceProductItemInvoiceProductStatusInput.id,
      updateInvoiceProductItemInvoiceProductStatusInput,
    );
  }

  @Mutation(() => InvoiceProductItemInvoiceProductStatus)
  removeInvoiceProductItemInvoiceProductStatus(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.invoiceProductItemInvoiceProductStatusService.remove(id);
  }
}
