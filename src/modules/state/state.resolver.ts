import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StateService } from './state.service';
import { CreateStateInput } from './dto/create-state.input';
import { UpdateStateInput } from './dto/update-state.input';
import { State } from '@/modules/state/domain/state';

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly stateService: StateService) {}

  @Mutation(() => State)
  createState(@Args('createStateInput') createStateInput: CreateStateInput) {
    return this.stateService.create(createStateInput);
  }

  @Query(() => [State], { name: 'state' })
  findAll() {
    return this.stateService.findAll();
  }

  @Query(() => State, { name: 'state' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stateService.findOne(id);
  }

  @Mutation(() => State)
  updateState(@Args('updateStateInput') updateStateInput: UpdateStateInput) {
    return this.stateService.update(updateStateInput.id, updateStateInput);
  }

  @Mutation(() => State)
  removeState(@Args('id', { type: () => Int }) id: number) {
    return this.stateService.remove(id);
  }
}
