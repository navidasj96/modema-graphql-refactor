import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModelVisitService } from './model-visit.service';
import { CreateModelVisitInput } from './dto/create-model-visit.input';
import { UpdateModelVisitInput } from './dto/update-model-visit.input';
import { ModelVisit } from '@/modules/model-visit/domain/model-visit';

@Resolver(() => ModelVisit)
export class ModelVisitResolver {
  constructor(private readonly modelVisitService: ModelVisitService) {}

  @Mutation(() => ModelVisit)
  createModelVisit(
    @Args('createModelVisitInput') createModelVisitInput: CreateModelVisitInput,
  ) {
    return this.modelVisitService.create(createModelVisitInput);
  }

  @Query(() => [ModelVisit], { name: 'modelVisit' })
  findAll() {
    return this.modelVisitService.findAll();
  }

  @Query(() => ModelVisit, { name: 'modelVisit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.modelVisitService.findOne(id);
  }

  @Mutation(() => ModelVisit)
  updateModelVisit(
    @Args('updateModelVisitInput') updateModelVisitInput: UpdateModelVisitInput,
  ) {
    return this.modelVisitService.update(
      updateModelVisitInput.id,
      updateModelVisitInput,
    );
  }

  @Mutation(() => ModelVisit)
  removeModelVisit(@Args('id', { type: () => Int }) id: number) {
    return this.modelVisitService.remove(id);
  }
}
