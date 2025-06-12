import { Resolver } from '@nestjs/graphql';
import { ColorCategorySubproductService } from './color-category-subproduct.service';
import { ColorCategorySubproduct } from './domain/color-category-subproduct';

@Resolver(() => ColorCategorySubproduct)
export class ColorCategorySubproductResolver {
  constructor(
    private readonly colorCategorySubproductService: ColorCategorySubproductService
  ) {}
}
