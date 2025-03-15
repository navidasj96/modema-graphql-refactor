import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceAddressService } from './invoice-address.service';
import { CreateInvoiceAddressInput } from './dto/create-invoice-address.input';
import { UpdateInvoiceAddressInput } from './dto/update-invoice-address.input';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';

@Resolver(() => InvoiceAddress)
export class InvoiceAddressResolver {
  constructor(private readonly invoiceAddressService: InvoiceAddressService) {}

  @Mutation(() => InvoiceAddress)
  createInvoiceAddress(
    @Args('createInvoiceAddressInput')
    createInvoiceAddressInput: CreateInvoiceAddressInput,
  ) {
    return this.invoiceAddressService.create(createInvoiceAddressInput);
  }

  @Query(() => [InvoiceAddress], { name: 'invoiceAddress' })
  findAll() {
    return this.invoiceAddressService.findAll();
  }

  @Query(() => InvoiceAddress, { name: 'invoiceAddress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceAddressService.findOne(id);
  }

  @Mutation(() => InvoiceAddress)
  updateInvoiceAddress(
    @Args('updateInvoiceAddressInput')
    updateInvoiceAddressInput: UpdateInvoiceAddressInput,
  ) {
    return this.invoiceAddressService.update(
      updateInvoiceAddressInput.id,
      updateInvoiceAddressInput,
    );
  }

  @Mutation(() => InvoiceAddress)
  removeInvoiceAddress(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceAddressService.remove(id);
  }
}
