import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HyperService } from './hyper.service';
import { CreateHyperInput } from './dto/create-hyper.input';
import { UpdateHyperInput } from './dto/update-hyper.input';
import { Hyper } from './domain/hyper';

@Resolver(() => Hyper)
export class HyperResolver {
  constructor(private readonly hyperService: HyperService) {}

  @Mutation(() => Hyper)
  createHyper(@Args('createHyperInput') createHyperInput: CreateHyperInput) {
    return this.hyperService.create(createHyperInput);
  }

  @Query(() => [Hyper], { name: 'hyper' })
  findAll() {
    return this.hyperService.findAll();
  }

  @Query(() => Hyper, { name: 'hyper' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hyperService.findOne(id);
  }

  @Mutation(() => Hyper)
  updateHyper(@Args('updateHyperInput') updateHyperInput: UpdateHyperInput) {
    return this.hyperService.update(updateHyperInput.id, updateHyperInput);
  }

  @Mutation(() => Hyper)
  removeHyper(@Args('id', { type: () => Int }) id: number) {
    return this.hyperService.remove(id);
  }
}
