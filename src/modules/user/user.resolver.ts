import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './domain/user';
import { CreateUserResponseDto } from '@/modules/user/dto/create-user-response.dto';
import { UpdateUserResponseDto } from '@/modules/user/dto/update-use-response.dto';
import { UserTransactionListReturnDto } from '@/modules/user/dto/user-transaction-list-return.dto';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { UserPermissions } from '@/utils/permissions';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => CreateUserResponseDto)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => UpdateUserResponseDto)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.updateUser(updateUserInput, updateUserInput.id);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }

  @UseGuards(PermissionsGuard)
  @Permissions([UserPermissions.PERMISSION_TO_VIEW_USER_TRANSACTIONS])
  @Query(() => UserTransactionListReturnDto)
  userTransactionList(@Args('id', { type: () => Int }) id: number) {
    return this.userService.userTransactionList(id);
  }
}
