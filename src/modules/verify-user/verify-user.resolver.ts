import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VerifyUserService } from './verify-user.service';
import { CreateVerifyUserInput } from './dto/create-verify-user.input';
import { UpdateVerifyUserInput } from './dto/update-verify-user.input';
import { VerifyUser } from '@/modules/verify-user/domain/verify-user';

@Resolver(() => VerifyUser)
export class VerifyUserResolver {
  constructor(private readonly verifyUserService: VerifyUserService) {}

  @Mutation(() => VerifyUser)
  createVerifyUser(
    @Args('createVerifyUserInput') createVerifyUserInput: CreateVerifyUserInput,
  ) {
    return this.verifyUserService.create(createVerifyUserInput);
  }

  @Query(() => [VerifyUser], { name: 'verifyUser' })
  findAll() {
    return this.verifyUserService.findAll();
  }

  @Query(() => VerifyUser, { name: 'verifyUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.verifyUserService.findOne(id);
  }

  @Mutation(() => VerifyUser)
  updateVerifyUser(
    @Args('updateVerifyUserInput') updateVerifyUserInput: UpdateVerifyUserInput,
  ) {
    return this.verifyUserService.update(
      updateVerifyUserInput.id,
      updateVerifyUserInput,
    );
  }

  @Mutation(() => VerifyUser)
  removeVerifyUser(@Args('id', { type: () => Int }) id: number) {
    return this.verifyUserService.remove(id);
  }
}
