import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarpetFeatureUserService } from './carpet-feature-user.service';
import { CreateCarpetFeatureUserInput } from './dto/create-carpet-feature-user.input';
import { UpdateCarpetFeatureUserInput } from './dto/update-carpet-feature-user.input';
import { CarpetFeatureUser } from './domain/carpet-feature-user';

@Resolver(() => CarpetFeatureUser)
export class CarpetFeatureUserResolver {
  constructor(
    private readonly carpetFeatureUserService: CarpetFeatureUserService,
  ) {}

  @Mutation(() => CarpetFeatureUser)
  createCarpetFeatureUser(
    @Args('createCarpetFeatureUserInput')
    createCarpetFeatureUserInput: CreateCarpetFeatureUserInput,
  ) {
    return this.carpetFeatureUserService.create(createCarpetFeatureUserInput);
  }

  @Query(() => [CarpetFeatureUser], { name: 'carpetFeatureUser' })
  findAll() {
    return this.carpetFeatureUserService.findAll();
  }

  @Query(() => CarpetFeatureUser, { name: 'carpetFeatureUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carpetFeatureUserService.findOne(id);
  }

  @Mutation(() => CarpetFeatureUser)
  updateCarpetFeatureUser(
    @Args('updateCarpetFeatureUserInput')
    updateCarpetFeatureUserInput: UpdateCarpetFeatureUserInput,
  ) {
    return this.carpetFeatureUserService.update(
      updateCarpetFeatureUserInput.id,
      updateCarpetFeatureUserInput,
    );
  }

  @Mutation(() => CarpetFeatureUser)
  removeCarpetFeatureUser(@Args('id', { type: () => Int }) id: number) {
    return this.carpetFeatureUserService.remove(id);
  }
}
