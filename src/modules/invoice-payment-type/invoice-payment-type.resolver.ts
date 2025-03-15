import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoicePaymentTypeService } from './invoice-payment-type.service';
import { CreateInvoicePaymentTypeInput } from './dto/create-invoice-payment-type.input';
import { UpdateInvoicePaymentTypeInput } from './dto/update-invoice-payment-type.input';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/domain/invoice-payment-type';

@Resolver(() => InvoicePaymentType)
export class InvoicePaymentTypeResolver {
  constructor(
    private readonly invoicePaymentTypeService: InvoicePaymentTypeService,
  ) {}

  @Mutation(() => InvoicePaymentType)
  createInvoicePaymentType(
    @Args('createInvoicePaymentTypeInput')
    createInvoicePaymentTypeInput: CreateInvoicePaymentTypeInput,
  ) {
    return this.invoicePaymentTypeService.create(createInvoicePaymentTypeInput);
  }

  @Query(() => [InvoicePaymentType], { name: 'invoicePaymentType' })
  findAll() {
    return this.invoicePaymentTypeService.findAll();
  }

  @Query(() => InvoicePaymentType, { name: 'invoicePaymentType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentTypeService.findOne(id);
  }

  @Mutation(() => InvoicePaymentType)
  updateInvoicePaymentType(
    @Args('updateInvoicePaymentTypeInput')
    updateInvoicePaymentTypeInput: UpdateInvoicePaymentTypeInput,
  ) {
    return this.invoicePaymentTypeService.update(
      updateInvoicePaymentTypeInput.id,
      updateInvoicePaymentTypeInput,
    );
  }

  @Mutation(() => InvoicePaymentType)
  removeInvoicePaymentType(@Args('id', { type: () => Int }) id: number) {
    return this.invoicePaymentTypeService.remove(id);
  }
}
