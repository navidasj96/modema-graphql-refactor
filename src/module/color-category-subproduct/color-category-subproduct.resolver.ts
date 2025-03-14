import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorCategorySubproductService } from './color-category-subproduct.service';
import { CreateColorCategorySubproductInput } from './dto/create-color-category-subproduct.input';
import { UpdateColorCategorySubproductInput } from './dto/update-color-category-subproduct.input';
import { ColorCategorySubproduct } from './domain/color-category-subproduct';

@Resolver(() => ColorCategorySubproduct)
export class ColorCategorySubproductResolver {
  constructor(
    private readonly colorCategorySubproductService: ColorCategorySubproductService,
  ) {}

  @Mutation(() => ColorCategorySubproduct)
  createColorCategorySubproduct(
    @Args('createColorCategorySubproductInput')
    createColorCategorySubproductInput: CreateColorCategorySubproductInput,
  ) {
    return this.colorCategorySubproductService.create(
      createColorCategorySubproductInput,
    );
  }

  @Query(() => [ColorCategorySubproduct], { name: 'colorCategorySubproduct' })
  findAll() {
    return this.colorCategorySubproductService.findAll();
  }

  @Query(() => ColorCategorySubproduct, { name: 'colorCategorySubproduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorCategorySubproductService.findOne(id);
  }

  @Mutation(() => ColorCategorySubproduct)
  updateColorCategorySubproduct(
    @Args('updateColorCategorySubproductInput')
    updateColorCategorySubproductInput: UpdateColorCategorySubproductInput,
  ) {
    return this.colorCategorySubproductService.update(
      updateColorCategorySubproductInput.id,
      updateColorCategorySubproductInput,
    );
  }

  @Mutation(() => ColorCategorySubproduct)
  removeColorCategorySubproduct(@Args('id', { type: () => Int }) id: number) {
    return this.colorCategorySubproductService.remove(id);
  }
}
