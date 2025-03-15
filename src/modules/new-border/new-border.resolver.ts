import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewBorderService } from './new-border.service';
import { CreateNewBorderInput } from './dto/create-new-border.input';
import { UpdateNewBorderInput } from './dto/update-new-border.input';
import { NewBorder } from '@/modules/new-border/domain/new-border';

@Resolver(() => NewBorder)
export class NewBorderResolver {
  constructor(private readonly newBorderService: NewBorderService) {}

  @Mutation(() => NewBorder)
  createNewBorder(
    @Args('createNewBorderInput') createNewBorderInput: CreateNewBorderInput,
  ) {
    return this.newBorderService.create(createNewBorderInput);
  }

  @Query(() => [NewBorder], { name: 'newBorder' })
  findAll() {
    return this.newBorderService.findAll();
  }

  @Query(() => NewBorder, { name: 'newBorder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.newBorderService.findOne(id);
  }

  @Mutation(() => NewBorder)
  updateNewBorder(
    @Args('updateNewBorderInput') updateNewBorderInput: UpdateNewBorderInput,
  ) {
    return this.newBorderService.update(
      updateNewBorderInput.id,
      updateNewBorderInput,
    );
  }

  @Mutation(() => NewBorder)
  removeNewBorder(@Args('id', { type: () => Int }) id: number) {
    return this.newBorderService.remove(id);
  }
}
