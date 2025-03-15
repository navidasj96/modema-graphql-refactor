import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceShippingRateService } from './invoice-shipping-rate.service';
import { CreateInvoiceShippingRateInput } from './dto/create-invoice-shipping-rate.input';
import { UpdateInvoiceShippingRateInput } from './dto/update-invoice-shipping-rate.input';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate';

@Resolver(() => InvoiceShippingRate)
export class InvoiceShippingRateResolver {
  constructor(
    private readonly invoiceShippingRateService: InvoiceShippingRateService,
  ) {}

  @Mutation(() => InvoiceShippingRate)
  createInvoiceShippingRate(
    @Args('createInvoiceShippingRateInput')
    createInvoiceShippingRateInput: CreateInvoiceShippingRateInput,
  ) {
    return this.invoiceShippingRateService.create(
      createInvoiceShippingRateInput,
    );
  }

  @Query(() => [InvoiceShippingRate], { name: 'invoiceShippingRate' })
  findAll() {
    return this.invoiceShippingRateService.findAll();
  }

  @Query(() => InvoiceShippingRate, { name: 'invoiceShippingRate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceShippingRateService.findOne(id);
  }

  @Mutation(() => InvoiceShippingRate)
  updateInvoiceShippingRate(
    @Args('updateInvoiceShippingRateInput')
    updateInvoiceShippingRateInput: UpdateInvoiceShippingRateInput,
  ) {
    return this.invoiceShippingRateService.update(
      updateInvoiceShippingRateInput.id,
      updateInvoiceShippingRateInput,
    );
  }

  @Mutation(() => InvoiceShippingRate)
  removeInvoiceShippingRate(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceShippingRateService.remove(id);
  }
}
