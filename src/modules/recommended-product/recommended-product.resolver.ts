import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecommendedProductService } from './recommended-product.service';
import { CreateRecommendedProductInput } from './dto/create-recommended-product.input';
import { UpdateRecommendedProductInput } from './dto/update-recommended-product.input';
import { RecommendedProduct } from '@/modules/recommended-product/domain/recommended-product';

@Resolver(() => RecommendedProduct)
export class RecommendedProductResolver {
  constructor(
    private readonly recommendedProductService: RecommendedProductService,
  ) {}

  @Mutation(() => RecommendedProduct)
  createRecommendedProduct(
    @Args('createRecommendedProductInput')
    createRecommendedProductInput: CreateRecommendedProductInput,
  ) {
    return this.recommendedProductService.create(createRecommendedProductInput);
  }

  @Query(() => [RecommendedProduct], { name: 'recommendedProduct' })
  findAll() {
    return this.recommendedProductService.findAll();
  }

  @Query(() => RecommendedProduct, { name: 'recommendedProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.recommendedProductService.findOne(id);
  }

  @Mutation(() => RecommendedProduct)
  updateRecommendedProduct(
    @Args('updateRecommendedProductInput')
    updateRecommendedProductInput: UpdateRecommendedProductInput,
  ) {
    return this.recommendedProductService.update(
      updateRecommendedProductInput.id,
      updateRecommendedProductInput,
    );
  }

  @Mutation(() => RecommendedProduct)
  removeRecommendedProduct(@Args('id', { type: () => Int }) id: number) {
    return this.recommendedProductService.remove(id);
  }
}
