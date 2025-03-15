import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BorderService } from './border.service';
import { CreateBorderInput } from './dto/create-border.input';
import { UpdateBorderInput } from './dto/update-border.input';
import { Border } from './domain/border';

@Resolver(() => Border)
export class BorderResolver {
  constructor(private readonly borderService: BorderService) {}

  @Mutation(() => Border)
  createBorder(
    @Args('createBorderInput') createBorderInput: CreateBorderInput,
  ) {
    return this.borderService.create(createBorderInput);
  }

  @Query(() => [Border], { name: 'border' })
  findAll() {
    return this.borderService.findAll();
  }

  @Query(() => Border, { name: 'border' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.borderService.findOne(id);
  }

  @Mutation(() => Border)
  updateBorder(
    @Args('updateBorderInput') updateBorderInput: UpdateBorderInput,
  ) {
    return this.borderService.update(updateBorderInput.id, updateBorderInput);
  }

  @Mutation(() => Border)
  removeBorder(@Args('id', { type: () => Int }) id: number) {
    return this.borderService.remove(id);
  }
}
