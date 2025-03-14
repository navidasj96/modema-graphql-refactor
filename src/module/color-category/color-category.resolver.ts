import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorCategoryService } from './color-category.service';
import { CreateColorCategoryInput } from './dto/create-color-category.input';
import { UpdateColorCategoryInput } from './dto/update-color-category.input';
import { ColorCategory } from './domain/color-category';

@Resolver(() => ColorCategory)
export class ColorCategoryResolver {
  constructor(private readonly colorCategoryService: ColorCategoryService) {}

  @Mutation(() => ColorCategory)
  createColorCategory(
    @Args('createColorCategoryInput')
    createColorCategoryInput: CreateColorCategoryInput,
  ) {
    return this.colorCategoryService.create(createColorCategoryInput);
  }

  @Query(() => [ColorCategory], { name: 'colorCategory' })
  findAll() {
    return this.colorCategoryService.findAll();
  }

  @Query(() => ColorCategory, { name: 'colorCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorCategoryService.findOne(id);
  }

  @Mutation(() => ColorCategory)
  updateColorCategory(
    @Args('updateColorCategoryInput')
    updateColorCategoryInput: UpdateColorCategoryInput,
  ) {
    return this.colorCategoryService.update(
      updateColorCategoryInput.id,
      updateColorCategoryInput,
    );
  }

  @Mutation(() => ColorCategory)
  removeColorCategory(@Args('id', { type: () => Int }) id: number) {
    return this.colorCategoryService.remove(id);
  }
}
