import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { PermissionPure } from '@/modules/permission/domain/permission.pure';
import { RolePure } from '@/modules/role/domain/role.pure';

@InputType('RoleHasPermissionPureDomain')
@ObjectType()
export class RoleHasPermissionPure {
  @Field(() => ID)
  permissionId: number;

  @Field()
  roleId: string;

  @Field(() => PermissionPure)
  permission: PermissionPure;

  @Field(() => RolePure)
  role: RolePure;
}
