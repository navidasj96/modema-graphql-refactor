import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductRateAverageService } from './product-rate-average.service';
import { CreateProductRateAverageInput } from './dto/create-product-rate-average.input';
import { UpdateProductRateAverageInput } from './dto/update-product-rate-average.input';
import { ProductRateAverage } from '@/modules/product-rate-average/domain/product-rate-average';

@Resolver(() => ProductRateAverage)
export class ProductRateAverageResolver {
  constructor(
    private readonly productRateAverageService: ProductRateAverageService,
  ) {}

  @Mutation(() => ProductRateAverage)
  createProductRateAverage(
    @Args('createProductRateAverageInput')
    createProductRateAverageInput: CreateProductRateAverageInput,
  ) {
    return this.productRateAverageService.create(createProductRateAverageInput);
  }

  @Query(() => [ProductRateAverage], { name: 'productRateAverage' })
  findAll() {
    return this.productRateAverageService.findAll();
  }

  @Query(() => ProductRateAverage, { name: 'productRateAverage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productRateAverageService.findOne(id);
  }

  @Mutation(() => ProductRateAverage)
  updateProductRateAverage(
    @Args('updateProductRateAverageInput')
    updateProductRateAverageInput: UpdateProductRateAverageInput,
  ) {
    return this.productRateAverageService.update(
      updateProductRateAverageInput.id,
      updateProductRateAverageInput,
    );
  }

  @Mutation(() => ProductRateAverage)
  removeProductRateAverage(@Args('id', { type: () => Int }) id: number) {
    return this.productRateAverageService.remove(id);
  }
}
