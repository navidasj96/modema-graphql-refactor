import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetFeatureService } from './carpet-feature.service';
import { CreateCarpetFeatureInput } from './dto/create-carpet-feature.input';
import { UpdateCarpetFeatureInput } from './dto/update-carpet-feature.input';
import { CarpetFeature } from './domain/carpet-feature';

@Resolver(() => CarpetFeature)
export class CarpetFeatureResolver {
  constructor(private readonly carpetFeatureService: CarpetFeatureService) {}

  @Mutation(() => CarpetFeature)
  createCarpetFeature(
    @Args('createCarpetFeatureInput')
    createCarpetFeatureInput: CreateCarpetFeatureInput,
  ) {
    return this.carpetFeatureService.create(createCarpetFeatureInput);
  }

  @Query(() => [CarpetFeature], { name: 'carpetFeature' })
  findAll() {
    return this.carpetFeatureService.findAll();
  }

  @Query(() => CarpetFeature, { name: 'carpetFeature' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetFeatureService.findOne(id);
  }

  @Mutation(() => CarpetFeature)
  updateCarpetFeature(
    @Args('updateCarpetFeatureInput')
    updateCarpetFeatureInput: UpdateCarpetFeatureInput,
  ) {
    return this.carpetFeatureService.update(
      updateCarpetFeatureInput.id,
      updateCarpetFeatureInput,
    );
  }

  @Mutation(() => CarpetFeature)
  removeCarpetFeature(@Args('id', { type: () => Int }) id: number) {
    return this.carpetFeatureService.remove(id);
  }
}
