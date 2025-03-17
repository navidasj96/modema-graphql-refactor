import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubcolorService } from './subcolor.service';
import { CreateSubcolorInput } from './dto/create-subcolor.input';
import { UpdateSubcolorInput } from './dto/update-subcolor.input';
import { Subcolor } from '@/modules/subcolor/domain/subcolor';

@Resolver(() => Subcolor)
export class SubcolorResolver {
  constructor(private readonly subcolorService: SubcolorService) {}

  @Mutation(() => Subcolor)
  createSubcolor(
    @Args('createSubcolorInput') createSubcolorInput: CreateSubcolorInput,
  ) {
    return this.subcolorService.create(createSubcolorInput);
  }

  @Query(() => [Subcolor], { name: 'subcolor' })
  findAll() {
    return this.subcolorService.findAll();
  }

  @Query(() => Subcolor, { name: 'subcolor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subcolorService.findOne(id);
  }

  @Mutation(() => Subcolor)
  updateSubcolor(
    @Args('updateSubcolorInput') updateSubcolorInput: UpdateSubcolorInput,
  ) {
    return this.subcolorService.update(
      updateSubcolorInput.id,
      updateSubcolorInput,
    );
  }

  @Mutation(() => Subcolor)
  removeSubcolor(@Args('id', { type: () => Int }) id: number) {
    return this.subcolorService.remove(id);
  }
}
