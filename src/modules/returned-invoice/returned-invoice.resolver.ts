import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnedInvoiceService } from './returned-invoice.service';
import { CreateReturnedInvoiceInput } from './dto/create-returned-invoice.input';
import { UpdateReturnedInvoiceInput } from './dto/update-returned-invoice.input';
import { ReturnedInvoice } from '@/modules/returned-invoice/domain/returned-invoice';

@Resolver(() => ReturnedInvoice)
export class ReturnedInvoiceResolver {
  constructor(
    private readonly returnedInvoiceService: ReturnedInvoiceService,
  ) {}

  @Mutation(() => ReturnedInvoice)
  createReturnedInvoice(
    @Args('createReturnedInvoiceInput')
    createReturnedInvoiceInput: CreateReturnedInvoiceInput,
  ) {
    return this.returnedInvoiceService.create(createReturnedInvoiceInput);
  }

  @Query(() => [ReturnedInvoice], { name: 'returnedInvoice' })
  findAll() {
    return this.returnedInvoiceService.findAll();
  }

  @Query(() => ReturnedInvoice, { name: 'returnedInvoice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnedInvoiceService.findOne(id);
  }

  @Mutation(() => ReturnedInvoice)
  updateReturnedInvoice(
    @Args('updateReturnedInvoiceInput')
    updateReturnedInvoiceInput: UpdateReturnedInvoiceInput,
  ) {
    return this.returnedInvoiceService.update(
      updateReturnedInvoiceInput.id,
      updateReturnedInvoiceInput,
    );
  }

  @Mutation(() => ReturnedInvoice)
  removeReturnedInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.returnedInvoiceService.remove(id);
  }
}
