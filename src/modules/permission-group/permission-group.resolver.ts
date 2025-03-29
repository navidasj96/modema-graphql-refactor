import { Resolver } from '@nestjs/graphql';
import { PermissionGroupService } from './permission-group.service';
import { PermissionGroup } from '@/modules/permission-group/domain/permission-group';

@Resolver(() => PermissionGroup)
export class PermissionGroupResolver {
  constructor(
    private readonly permissionGroupService: PermissionGroupService,
  ) {}
}
