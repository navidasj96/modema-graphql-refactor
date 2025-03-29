import { Resolver } from '@nestjs/graphql';
import { PatternCategoryService } from './pattern-category.service';
import { PatternCategory } from '@/modules/pattern-category/domain/pattern-category';

@Resolver(() => PatternCategory)
export class PatternCategoryResolver {
  constructor(
    private readonly patternCategoryService: PatternCategoryService,
  ) {}
}
