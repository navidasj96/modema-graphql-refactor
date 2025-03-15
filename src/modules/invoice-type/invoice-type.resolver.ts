import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceTypeService } from './invoice-type.service';
import { CreateInvoiceTypeInput } from './dto/create-invoice-type.input';
import { UpdateInvoiceTypeInput } from './dto/update-invoice-type.input';
import { InvoiceType } from '@/modules/invoice-type/domain/invoice-type';

@Resolver(() => InvoiceType)
export class InvoiceTypeResolver {
  constructor(private readonly invoiceTypeService: InvoiceTypeService) {}

  @Mutation(() => InvoiceType)
  createInvoiceType(
    @Args('createInvoiceTypeInput')
    createInvoiceTypeInput: CreateInvoiceTypeInput,
  ) {
    return this.invoiceTypeService.create(createInvoiceTypeInput);
  }

  @Query(() => [InvoiceType], { name: 'invoiceType' })
  findAll() {
    return this.invoiceTypeService.findAll();
  }

  @Query(() => InvoiceType, { name: 'invoiceType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceTypeService.findOne(id);
  }

  @Mutation(() => InvoiceType)
  updateInvoiceType(
    @Args('updateInvoiceTypeInput')
    updateInvoiceTypeInput: UpdateInvoiceTypeInput,
  ) {
    return this.invoiceTypeService.update(
      updateInvoiceTypeInput.id,
      updateInvoiceTypeInput,
    );
  }

  @Mutation(() => InvoiceType)
  removeInvoiceType(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceTypeService.remove(id);
  }
}
