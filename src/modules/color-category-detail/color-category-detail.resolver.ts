import { Resolver } from '@nestjs/graphql';
import { ColorCategoryDetailService } from './color-category-detail.service';
import { ColorCategoryDetail } from './domain/color-category-detail';

@Resolver(() => ColorCategoryDetail)
export class ColorCategoryDetailResolver {
  constructor(
    private readonly colorCategoryDetailService: ColorCategoryDetailService
  ) {}
}
