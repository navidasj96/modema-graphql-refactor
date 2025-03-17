import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecommendedSubproductService } from './recommended-subproduct.service';
import { CreateRecommendedSubproductInput } from './dto/create-recommended-subproduct.input';
import { UpdateRecommendedSubproductInput } from './dto/update-recommended-subproduct.input';
import { RecommendedSubproduct } from '@/modules/recommended-subproduct/domain/recommended-subproduct';

@Resolver(() => RecommendedSubproduct)
export class RecommendedSubproductResolver {
  constructor(
    private readonly recommendedSubproductService: RecommendedSubproductService,
  ) {}

  @Mutation(() => RecommendedSubproduct)
  createRecommendedSubproduct(
    @Args('createRecommendedSubproductInput')
    createRecommendedSubproductInput: CreateRecommendedSubproductInput,
  ) {
    return this.recommendedSubproductService.create(
      createRecommendedSubproductInput,
    );
  }

  @Query(() => [RecommendedSubproduct], { name: 'recommendedSubproduct' })
  findAll() {
    return this.recommendedSubproductService.findAll();
  }

  @Query(() => RecommendedSubproduct, { name: 'recommendedSubproduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.recommendedSubproductService.findOne(id);
  }

  @Mutation(() => RecommendedSubproduct)
  updateRecommendedSubproduct(
    @Args('updateRecommendedSubproductInput')
    updateRecommendedSubproductInput: UpdateRecommendedSubproductInput,
  ) {
    return this.recommendedSubproductService.update(
      updateRecommendedSubproductInput.id,
      updateRecommendedSubproductInput,
    );
  }

  @Mutation(() => RecommendedSubproduct)
  removeRecommendedSubproduct(@Args('id', { type: () => Int }) id: number) {
    return this.recommendedSubproductService.remove(id);
  }
}
