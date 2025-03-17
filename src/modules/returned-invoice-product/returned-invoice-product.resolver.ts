import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReturnedInvoiceProductService } from './returned-invoice-product.service';
import { CreateReturnedInvoiceProductInput } from './dto/create-returned-invoice-product.input';
import { UpdateReturnedInvoiceProductInput } from './dto/update-returned-invoice-product.input';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/domain/returned-invoice-product';

@Resolver(() => ReturnedInvoiceProduct)
export class ReturnedInvoiceProductResolver {
  constructor(
    private readonly returnedInvoiceProductService: ReturnedInvoiceProductService,
  ) {}

  @Mutation(() => ReturnedInvoiceProduct)
  createReturnedInvoiceProduct(
    @Args('createReturnedInvoiceProductInput')
    createReturnedInvoiceProductInput: CreateReturnedInvoiceProductInput,
  ) {
    return this.returnedInvoiceProductService.create(
      createReturnedInvoiceProductInput,
    );
  }

  @Query(() => [ReturnedInvoiceProduct], { name: 'returnedInvoiceProduct' })
  findAll() {
    return this.returnedInvoiceProductService.findAll();
  }

  @Query(() => ReturnedInvoiceProduct, { name: 'returnedInvoiceProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.returnedInvoiceProductService.findOne(id);
  }

  @Mutation(() => ReturnedInvoiceProduct)
  updateReturnedInvoiceProduct(
    @Args('updateReturnedInvoiceProductInput')
    updateReturnedInvoiceProductInput: UpdateReturnedInvoiceProductInput,
  ) {
    return this.returnedInvoiceProductService.update(
      updateReturnedInvoiceProductInput.id,
      updateReturnedInvoiceProductInput,
    );
  }

  @Mutation(() => ReturnedInvoiceProduct)
  removeReturnedInvoiceProduct(@Args('id', { type: () => Int }) id: number) {
    return this.returnedInvoiceProductService.remove(id);
  }
}
