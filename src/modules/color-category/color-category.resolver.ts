import { Resolver } from '@nestjs/graphql';
import { ColorCategoryService } from './color-category.service';
import { ColorCategory } from './domain/color-category';

@Resolver(() => ColorCategory)
export class ColorCategoryResolver {
  constructor(private readonly colorCategoryService: ColorCategoryService) {}
}
