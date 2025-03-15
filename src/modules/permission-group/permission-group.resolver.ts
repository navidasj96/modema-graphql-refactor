import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissionGroupService } from './permission-group.service';
import { CreatePermissionGroupInput } from './dto/create-permission-group.input';
import { UpdatePermissionGroupInput } from './dto/update-permission-group.input';
import { PermissionGroup } from '@/modules/permission-group/domain/permission-group';

@Resolver(() => PermissionGroup)
export class PermissionGroupResolver {
  constructor(
    private readonly permissionGroupService: PermissionGroupService,
  ) {}

  @Mutation(() => PermissionGroup)
  createPermissionGroup(
    @Args('createPermissionGroupInput')
    createPermissionGroupInput: CreatePermissionGroupInput,
  ) {
    return this.permissionGroupService.create(createPermissionGroupInput);
  }

  @Query(() => [PermissionGroup], { name: 'permissionGroup' })
  findAll() {
    return this.permissionGroupService.findAll();
  }

  @Query(() => PermissionGroup, { name: 'permissionGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.permissionGroupService.findOne(id);
  }

  @Mutation(() => PermissionGroup)
  updatePermissionGroup(
    @Args('updatePermissionGroupInput')
    updatePermissionGroupInput: UpdatePermissionGroupInput,
  ) {
    return this.permissionGroupService.update(
      updatePermissionGroupInput.id,
      updatePermissionGroupInput,
    );
  }

  @Mutation(() => PermissionGroup)
  removePermissionGroup(@Args('id', { type: () => Int }) id: number) {
    return this.permissionGroupService.remove(id);
  }
}
