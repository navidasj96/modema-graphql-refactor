import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductRateService } from './product-rate.service';
import { CreateProductRateInput } from './dto/create-product-rate.input';
import { UpdateProductRateInput } from './dto/update-product-rate.input';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';

@Resolver(() => ProductRate)
export class ProductRateResolver {
  constructor(private readonly productRateService: ProductRateService) {}

  @Mutation(() => ProductRate)
  createProductRate(
    @Args('createProductRateInput')
    createProductRateInput: CreateProductRateInput,
  ) {
    return this.productRateService.create(createProductRateInput);
  }

  @Query(() => [ProductRate], { name: 'productRate' })
  findAll() {
    return this.productRateService.findAll();
  }

  @Query(() => ProductRate, { name: 'productRate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productRateService.findOne(id);
  }

  @Mutation(() => ProductRate)
  updateProductRate(
    @Args('updateProductRateInput')
    updateProductRateInput: UpdateProductRateInput,
  ) {
    return this.productRateService.update(
      updateProductRateInput.id,
      updateProductRateInput,
    );
  }

  @Mutation(() => ProductRate)
  removeProductRate(@Args('id', { type: () => Int }) id: number) {
    return this.productRateService.remove(id);
  }
}
