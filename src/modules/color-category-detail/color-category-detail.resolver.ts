import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorCategoryDetailService } from './color-category-detail.service';
import { CreateColorCategoryDetailInput } from './dto/create-color-category-detail.input';
import { UpdateColorCategoryDetailInput } from './dto/update-color-category-detail.input';
import { ColorCategoryDetail } from './domain/color-category-detail';

@Resolver(() => ColorCategoryDetail)
export class ColorCategoryDetailResolver {
  constructor(
    private readonly colorCategoryDetailService: ColorCategoryDetailService,
  ) {}

  @Mutation(() => ColorCategoryDetail)
  createColorCategoryDetail(
    @Args('createColorCategoryDetailInput')
    createColorCategoryDetailInput: CreateColorCategoryDetailInput,
  ) {
    return this.colorCategoryDetailService.create(
      createColorCategoryDetailInput,
    );
  }

  @Query(() => [ColorCategoryDetail], { name: 'colorCategoryDetail' })
  findAll() {
    return this.colorCategoryDetailService.findAll();
  }

  @Query(() => ColorCategoryDetail, { name: 'colorCategoryDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorCategoryDetailService.findOne(id);
  }

  @Mutation(() => ColorCategoryDetail)
  updateColorCategoryDetail(
    @Args('updateColorCategoryDetailInput')
    updateColorCategoryDetailInput: UpdateColorCategoryDetailInput,
  ) {
    return this.colorCategoryDetailService.update(
      updateColorCategoryDetailInput.id,
      updateColorCategoryDetailInput,
    );
  }

  @Mutation(() => ColorCategoryDetail)
  removeColorCategoryDetail(@Args('id', { type: () => Int }) id: number) {
    return this.colorCategoryDetailService.remove(id);
  }
}
