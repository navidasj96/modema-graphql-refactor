import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PatternLayerService } from './pattern-layer.service';
import { CreatePatternLayerInput } from './dto/create-pattern-layer.input';
import { UpdatePatternLayerInput } from './dto/update-pattern-layer.input';
import { PatternLayer } from '@/modules/pattern-layer/domain/pattern-layer';

@Resolver(() => PatternLayer)
export class PatternLayerResolver {
  constructor(private readonly patternLayerService: PatternLayerService) {}

  @Mutation(() => PatternLayer)
  createPatternLayer(
    @Args('createPatternLayerInput')
    createPatternLayerInput: CreatePatternLayerInput,
  ) {
    return this.patternLayerService.create(createPatternLayerInput);
  }

  @Query(() => [PatternLayer], { name: 'patternLayer' })
  findAll() {
    return this.patternLayerService.findAll();
  }

  @Query(() => PatternLayer, { name: 'patternLayer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patternLayerService.findOne(id);
  }

  @Mutation(() => PatternLayer)
  updatePatternLayer(
    @Args('updatePatternLayerInput')
    updatePatternLayerInput: UpdatePatternLayerInput,
  ) {
    return this.patternLayerService.update(
      updatePatternLayerInput.id,
      updatePatternLayerInput,
    );
  }

  @Mutation(() => PatternLayer)
  removePatternLayer(@Args('id', { type: () => Int }) id: number) {
    return this.patternLayerService.remove(id);
  }
}
