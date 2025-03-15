import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetUsagePlaceUserService } from './carpet-usage-place-user.service';
import { CreateCarpetUsagePlaceUserInput } from './dto/create-carpet-usage-place-user.input';
import { UpdateCarpetUsagePlaceUserInput } from './dto/update-carpet-usage-place-user.input';
import { CarpetUsagePlaceUser } from './domain/carpet-usage-place-user';

@Resolver(() => CarpetUsagePlaceUser)
export class CarpetUsagePlaceUserResolver {
  constructor(
    private readonly carpetUsagePlaceUserService: CarpetUsagePlaceUserService,
  ) {}

  @Mutation(() => CarpetUsagePlaceUser)
  createCarpetUsagePlaceUser(
    @Args('createCarpetUsagePlaceUserInput')
    createCarpetUsagePlaceUserInput: CreateCarpetUsagePlaceUserInput,
  ) {
    return this.carpetUsagePlaceUserService.create(
      createCarpetUsagePlaceUserInput,
    );
  }

  @Query(() => [CarpetUsagePlaceUser], { name: 'carpetUsagePlaceUser' })
  findAll() {
    return this.carpetUsagePlaceUserService.findAll();
  }

  @Query(() => CarpetUsagePlaceUser, { name: 'carpetUsagePlaceUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetUsagePlaceUserService.findOne(id);
  }

  @Mutation(() => CarpetUsagePlaceUser)
  updateCarpetUsagePlaceUser(
    @Args('updateCarpetUsagePlaceUserInput')
    updateCarpetUsagePlaceUserInput: UpdateCarpetUsagePlaceUserInput,
  ) {
    return this.carpetUsagePlaceUserService.update(
      updateCarpetUsagePlaceUserInput.id,
      updateCarpetUsagePlaceUserInput,
    );
  }

  @Mutation(() => CarpetUsagePlaceUser)
  removeCarpetUsagePlaceUser(@Args('id', { type: () => Int }) id: number) {
    return this.carpetUsagePlaceUserService.remove(id);
  }
}
