import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserUtmService } from './user-utm.service';
import { CreateUserUtmInput } from './dto/create-user-utm.input';
import { UpdateUserUtmInput } from './dto/update-user-utm.input';
import { UserUtm } from '@/modules/user-utm/domain/user-utm';

@Resolver(() => UserUtm)
export class UserUtmResolver {
  constructor(private readonly userUtmService: UserUtmService) {}

  @Mutation(() => UserUtm)
  createUserUtm(
    @Args('createUserUtmInput') createUserUtmInput: CreateUserUtmInput,
  ) {
    return this.userUtmService.create(createUserUtmInput);
  }

  @Query(() => [UserUtm], { name: 'userUtm' })
  findAll() {
    return this.userUtmService.findAll();
  }

  @Query(() => UserUtm, { name: 'userUtm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userUtmService.findOne(id);
  }

  @Mutation(() => UserUtm)
  updateUserUtm(
    @Args('updateUserUtmInput') updateUserUtmInput: UpdateUserUtmInput,
  ) {
    return this.userUtmService.update(
      updateUserUtmInput.id,
      updateUserUtmInput,
    );
  }

  @Mutation(() => UserUtm)
  removeUserUtm(@Args('id', { type: () => Int }) id: number) {
    return this.userUtmService.remove(id);
  }
}
