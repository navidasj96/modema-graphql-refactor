import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PatternService } from './pattern.service';
import { CreatePatternInput } from './dto/create-pattern.input';
import { UpdatePatternInput } from './dto/update-pattern.input';
import { Pattern } from '@/modules/pattern/domain/pattern';

@Resolver(() => Pattern)
export class PatternResolver {
  constructor(private readonly patternService: PatternService) {}

  @Mutation(() => Pattern)
  createPattern(
    @Args('createPatternInput') createPatternInput: CreatePatternInput,
  ) {
    return this.patternService.create(createPatternInput);
  }

  @Query(() => [Pattern], { name: 'pattern' })
  findAll() {
    return this.patternService.findAll();
  }

  @Query(() => Pattern, { name: 'pattern' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patternService.findOne(id);
  }

  @Mutation(() => Pattern)
  updatePattern(
    @Args('updatePatternInput') updatePatternInput: UpdatePatternInput,
  ) {
    return this.patternService.update(
      updatePatternInput.id,
      updatePatternInput,
    );
  }

  @Mutation(() => Pattern)
  removePattern(@Args('id', { type: () => Int }) id: number) {
    return this.patternService.remove(id);
  }
}
