import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExitControlItemService } from './exit-control-item.service';
import { CreateExitControlItemInput } from './dto/create-exit-control-item.input';
import { UpdateExitControlItemInput } from './dto/update-exit-control-item.input';
import { ExitControlItem } from './domain/exit-control-item';

@Resolver(() => ExitControlItem)
export class ExitControlItemResolver {
  constructor(
    private readonly exitControlItemService: ExitControlItemService,
  ) {}

  @Mutation(() => ExitControlItem)
  createExitControlItem(
    @Args('createExitControlItemInput')
    createExitControlItemInput: CreateExitControlItemInput,
  ) {
    return this.exitControlItemService.create(createExitControlItemInput);
  }

  @Query(() => [ExitControlItem], { name: 'exitControlItem' })
  findAll() {
    return this.exitControlItemService.findAll();
  }

  @Query(() => ExitControlItem, { name: 'exitControlItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.exitControlItemService.findOne(id);
  }

  @Mutation(() => ExitControlItem)
  updateExitControlItem(
    @Args('updateExitControlItemInput')
    updateExitControlItemInput: UpdateExitControlItemInput,
  ) {
    return this.exitControlItemService.update(
      updateExitControlItemInput.id,
      updateExitControlItemInput,
    );
  }

  @Mutation(() => ExitControlItem)
  removeExitControlItem(@Args('id', { type: () => Int }) id: number) {
    return this.exitControlItemService.remove(id);
  }
}
