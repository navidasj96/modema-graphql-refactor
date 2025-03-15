import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCategoryRateService } from './product-category-rate.service';
import { CreateProductCategoryRateInput } from './dto/create-product-category-rate.input';
import { UpdateProductCategoryRateInput } from './dto/update-product-category-rate.input';
import { ProductCategoryRate } from '@/modules/product-category-rate/domain/product-category-rate';

@Resolver(() => ProductCategoryRate)
export class ProductCategoryRateResolver {
  constructor(
    private readonly productCategoryRateService: ProductCategoryRateService,
  ) {}

  @Mutation(() => ProductCategoryRate)
  createProductCategoryRate(
    @Args('createProductCategoryRateInput')
    createProductCategoryRateInput: CreateProductCategoryRateInput,
  ) {
    return this.productCategoryRateService.create(
      createProductCategoryRateInput,
    );
  }

  @Query(() => [ProductCategoryRate], { name: 'productCategoryRate' })
  findAll() {
    return this.productCategoryRateService.findAll();
  }

  @Query(() => ProductCategoryRate, { name: 'productCategoryRate' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoryRateService.findOne(id);
  }

  @Mutation(() => ProductCategoryRate)
  updateProductCategoryRate(
    @Args('updateProductCategoryRateInput')
    updateProductCategoryRateInput: UpdateProductCategoryRateInput,
  ) {
    return this.productCategoryRateService.update(
      updateProductCategoryRateInput.id,
      updateProductCategoryRateInput,
    );
  }

  @Mutation(() => ProductCategoryRate)
  removeProductCategoryRate(@Args('id', { type: () => Int }) id: number) {
    return this.productCategoryRateService.remove(id);
  }
}
