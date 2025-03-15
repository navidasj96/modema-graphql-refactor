import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OutOfStockButListedProductService } from './out-of-stock-but-listed-product.service';
import { CreateOutOfStockButListedProductInput } from './dto/create-out-of-stock-but-listed-product.input';
import { UpdateOutOfStockButListedProductInput } from './dto/update-out-of-stock-but-listed-product.input';
import { OutOfStockButListedProduct } from '@/modules/out-of-stock-but-listed-product/domain/out-of-stock-but-listed-product';

@Resolver(() => OutOfStockButListedProduct)
export class OutOfStockButListedProductResolver {
  constructor(
    private readonly outOfStockButListedProductService: OutOfStockButListedProductService,
  ) {}

  @Mutation(() => OutOfStockButListedProduct)
  createOutOfStockButListedProduct(
    @Args('createOutOfStockButListedProductInput')
    createOutOfStockButListedProductInput: CreateOutOfStockButListedProductInput,
  ) {
    return this.outOfStockButListedProductService.create(
      createOutOfStockButListedProductInput,
    );
  }

  @Query(() => [OutOfStockButListedProduct], {
    name: 'outOfStockButListedProduct',
  })
  findAll() {
    return this.outOfStockButListedProductService.findAll();
  }

  @Query(() => OutOfStockButListedProduct, {
    name: 'outOfStockButListedProduct',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.outOfStockButListedProductService.findOne(id);
  }

  @Mutation(() => OutOfStockButListedProduct)
  updateOutOfStockButListedProduct(
    @Args('updateOutOfStockButListedProductInput')
    updateOutOfStockButListedProductInput: UpdateOutOfStockButListedProductInput,
  ) {
    return this.outOfStockButListedProductService.update(
      updateOutOfStockButListedProductInput.id,
      updateOutOfStockButListedProductInput,
    );
  }

  @Mutation(() => OutOfStockButListedProduct)
  removeOutOfStockButListedProduct(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.outOfStockButListedProductService.remove(id);
  }
}
