import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DesignersProductPriceRangeService } from './designers-product-price-range.service';
import { CreateDesignersProductPriceRangeInput } from './dto/create-designers-product-price-range.input';
import { UpdateDesignersProductPriceRangeInput } from './dto/update-designers-product-price-range.input';
import { DesignersProductPriceRange } from './domain/designers-product-price-range';

@Resolver(() => DesignersProductPriceRange)
export class DesignersProductPriceRangeResolver {
  constructor(
    private readonly designersProductPriceRangeService: DesignersProductPriceRangeService,
  ) {}

  @Mutation(() => DesignersProductPriceRange)
  createDesignersProductPriceRange(
    @Args('createDesignersProductPriceRangeInput')
    createDesignersProductPriceRangeInput: CreateDesignersProductPriceRangeInput,
  ) {
    return this.designersProductPriceRangeService.create(
      createDesignersProductPriceRangeInput,
    );
  }

  @Query(() => [DesignersProductPriceRange], {
    name: 'designersProductPriceRange',
  })
  findAll() {
    return this.designersProductPriceRangeService.findAll();
  }

  @Query(() => DesignersProductPriceRange, {
    name: 'designersProductPriceRange',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.designersProductPriceRangeService.findOne(id);
  }

  @Mutation(() => DesignersProductPriceRange)
  updateDesignersProductPriceRange(
    @Args('updateDesignersProductPriceRangeInput')
    updateDesignersProductPriceRangeInput: UpdateDesignersProductPriceRangeInput,
  ) {
    return this.designersProductPriceRangeService.update(
      updateDesignersProductPriceRangeInput.id,
      updateDesignersProductPriceRangeInput,
    );
  }

  @Mutation(() => DesignersProductPriceRange)
  removeDesignersProductPriceRange(
    @Args('id', { type: () => Int }) id: number,
  ) {
    return this.designersProductPriceRangeService.remove(id);
  }
}
