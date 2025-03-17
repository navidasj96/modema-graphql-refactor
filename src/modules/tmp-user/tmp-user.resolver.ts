import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TmpUserService } from './tmp-user.service';
import { CreateTmpUserInput } from './dto/create-tmp-user.input';
import { UpdateTmpUserInput } from './dto/update-tmp-user.input';
import { TmpUser } from '@/modules/tmp-user/domain/tmp-user';

@Resolver(() => TmpUser)
export class TmpUserResolver {
  constructor(private readonly tmpUserService: TmpUserService) {}

  @Mutation(() => TmpUser)
  createTmpUser(
    @Args('createTmpUserInput') createTmpUserInput: CreateTmpUserInput,
  ) {
    return this.tmpUserService.create(createTmpUserInput);
  }

  @Query(() => [TmpUser], { name: 'tmpUser' })
  findAll() {
    return this.tmpUserService.findAll();
  }

  @Query(() => TmpUser, { name: 'tmpUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tmpUserService.findOne(id);
  }

  @Mutation(() => TmpUser)
  updateTmpUser(
    @Args('updateTmpUserInput') updateTmpUserInput: UpdateTmpUserInput,
  ) {
    return this.tmpUserService.update(
      updateTmpUserInput.id,
      updateTmpUserInput,
    );
  }

  @Mutation(() => TmpUser)
  removeTmpUser(@Args('id', { type: () => Int }) id: number) {
    return this.tmpUserService.remove(id);
  }
}
