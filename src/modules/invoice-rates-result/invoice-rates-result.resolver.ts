import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceRatesResultService } from './invoice-rates-result.service';
import { CreateInvoiceRatesResultInput } from './dto/create-invoice-rates-result.input';
import { UpdateInvoiceRatesResultInput } from './dto/update-invoice-rates-result.input';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/domain/invoice-rates-result';

@Resolver(() => InvoiceRatesResult)
export class InvoiceRatesResultResolver {
  constructor(
    private readonly invoiceRatesResultService: InvoiceRatesResultService,
  ) {}

  @Mutation(() => InvoiceRatesResult)
  createInvoiceRatesResult(
    @Args('createInvoiceRatesResultInput')
    createInvoiceRatesResultInput: CreateInvoiceRatesResultInput,
  ) {
    return this.invoiceRatesResultService.create(createInvoiceRatesResultInput);
  }

  @Query(() => [InvoiceRatesResult], { name: 'invoiceRatesResult' })
  findAll() {
    return this.invoiceRatesResultService.findAll();
  }

  @Query(() => InvoiceRatesResult, { name: 'invoiceRatesResult' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceRatesResultService.findOne(id);
  }

  @Mutation(() => InvoiceRatesResult)
  updateInvoiceRatesResult(
    @Args('updateInvoiceRatesResultInput')
    updateInvoiceRatesResultInput: UpdateInvoiceRatesResultInput,
  ) {
    return this.invoiceRatesResultService.update(
      updateInvoiceRatesResultInput.id,
      updateInvoiceRatesResultInput,
    );
  }

  @Mutation(() => InvoiceRatesResult)
  removeInvoiceRatesResult(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceRatesResultService.remove(id);
  }
}
