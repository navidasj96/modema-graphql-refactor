import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { CreateColorInput } from './dto/create-color.input';
import { UpdateColorInput } from './dto/update-color.input';
import { Color } from './domain/color';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly colorService: ColorService) {}

  @Mutation(() => Color)
  createColor(@Args('createColorInput') createColorInput: CreateColorInput) {
    return this.colorService.create(createColorInput);
  }

  @Query(() => [Color], { name: 'color' })
  findAll() {
    return this.colorService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.findOne(id);
  }

  @Mutation(() => Color)
  updateColor(@Args('updateColorInput') updateColorInput: UpdateColorInput) {
    return this.colorService.update(updateColorInput.id, updateColorInput);
  }

  @Mutation(() => Color)
  removeColor(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.remove(id);
  }
}
