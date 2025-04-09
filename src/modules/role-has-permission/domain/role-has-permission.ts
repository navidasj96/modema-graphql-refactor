import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { Permission } from '@/modules/permission/domain/permission';
import { Role } from '@/modules/role/domain/role';

@InputType('RoleHasPermissionDomain')
@UnPagedRelation('permission', () => Permission)
@UnPagedRelation('role', () => Role)
@ObjectType()
export class RoleHasPermission {
  @IDField(() => ID)
  permissionId: number;

  @FilterableField()
  roleId: string;

  @Field(() => Permission)
  permission: Permission;

  @Field(() => Role)
  role: Role;
}
