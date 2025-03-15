import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PatternCategoryService } from './pattern-category.service';
import { CreatePatternCategoryInput } from './dto/create-pattern-category.input';
import { UpdatePatternCategoryInput } from './dto/update-pattern-category.input';
import { PatternCategory } from '@/modules/pattern-category/domain/pattern-category';

@Resolver(() => PatternCategory)
export class PatternCategoryResolver {
  constructor(
    private readonly patternCategoryService: PatternCategoryService,
  ) {}

  @Mutation(() => PatternCategory)
  createPatternCategory(
    @Args('createPatternCategoryInput')
    createPatternCategoryInput: CreatePatternCategoryInput,
  ) {
    return this.patternCategoryService.create(createPatternCategoryInput);
  }

  @Query(() => [PatternCategory], { name: 'patternCategory' })
  findAll() {
    return this.patternCategoryService.findAll();
  }

  @Query(() => PatternCategory, { name: 'patternCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patternCategoryService.findOne(id);
  }

  @Mutation(() => PatternCategory)
  updatePatternCategory(
    @Args('updatePatternCategoryInput')
    updatePatternCategoryInput: UpdatePatternCategoryInput,
  ) {
    return this.patternCategoryService.update(
      updatePatternCategoryInput.id,
      updatePatternCategoryInput,
    );
  }

  @Mutation(() => PatternCategory)
  removePatternCategory(@Args('id', { type: () => Int }) id: number) {
    return this.patternCategoryService.remove(id);
  }
}
