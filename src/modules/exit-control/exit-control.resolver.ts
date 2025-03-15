import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExitControlService } from './exit-control.service';
import { CreateExitControlInput } from './dto/create-exit-control.input';
import { UpdateExitControlInput } from './dto/update-exit-control.input';
import { ExitControl } from './domain/exit-control';

@Resolver(() => ExitControl)
export class ExitControlResolver {
  constructor(private readonly exitControlService: ExitControlService) {}

  @Mutation(() => ExitControl)
  createExitControl(
    @Args('createExitControlInput')
    createExitControlInput: CreateExitControlInput,
  ) {
    return this.exitControlService.create(createExitControlInput);
  }

  @Query(() => [ExitControl], { name: 'exitControl' })
  findAll() {
    return this.exitControlService.findAll();
  }

  @Query(() => ExitControl, { name: 'exitControl' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.exitControlService.findOne(id);
  }

  @Mutation(() => ExitControl)
  updateExitControl(
    @Args('updateExitControlInput')
    updateExitControlInput: UpdateExitControlInput,
  ) {
    return this.exitControlService.update(
      updateExitControlInput.id,
      updateExitControlInput,
    );
  }

  @Mutation(() => ExitControl)
  removeExitControl(@Args('id', { type: () => Int }) id: number) {
    return this.exitControlService.remove(id);
  }
}
