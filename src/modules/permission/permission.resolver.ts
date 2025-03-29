import { Resolver } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from '@/modules/permission/domain/permission';

@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}
}
