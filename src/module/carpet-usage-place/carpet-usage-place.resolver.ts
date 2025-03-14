import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetUsagePlaceService } from './carpet-usage-place.service';
import { CreateCarpetUsagePlaceInput } from './dto/create-carpet-usage-place.input';
import { UpdateCarpetUsagePlaceInput } from './dto/update-carpet-usage-place.input';
import { CarpetUsagePlace } from './domain/carpet-usage-place';

@Resolver(() => CarpetUsagePlace)
export class CarpetUsagePlaceResolver {
  constructor(
    private readonly carpetUsagePlaceService: CarpetUsagePlaceService,
  ) {}

  @Mutation(() => CarpetUsagePlace)
  createCarpetUsagePlace(
    @Args('createCarpetUsagePlaceInput')
    createCarpetUsagePlaceInput: CreateCarpetUsagePlaceInput,
  ) {
    return this.carpetUsagePlaceService.create(createCarpetUsagePlaceInput);
  }

  @Query(() => [CarpetUsagePlace], { name: 'carpetUsagePlace' })
  findAll() {
    return this.carpetUsagePlaceService.findAll();
  }

  @Query(() => CarpetUsagePlace, { name: 'carpetUsagePlace' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetUsagePlaceService.findOne(id);
  }

  @Mutation(() => CarpetUsagePlace)
  updateCarpetUsagePlace(
    @Args('updateCarpetUsagePlaceInput')
    updateCarpetUsagePlaceInput: UpdateCarpetUsagePlaceInput,
  ) {
    return this.carpetUsagePlaceService.update(
      updateCarpetUsagePlaceInput.id,
      updateCarpetUsagePlaceInput,
    );
  }

  @Mutation(() => CarpetUsagePlace)
  removeCarpetUsagePlace(@Args('id', { type: () => Int }) id: number) {
    return this.carpetUsagePlaceService.remove(id);
  }
}
