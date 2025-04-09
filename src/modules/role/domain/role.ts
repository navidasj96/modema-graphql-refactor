import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  Authorize,
  FilterableField,
  IDField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { ModelHasRole } from '@/modules/model-has-role/domain/model-has-role';
import { Permission } from '@/modules/permission/domain/permission';
import { PermissionsAuthorizer } from '@/utils/permission.authorizer';
import { RolePermissions } from '@/utils/permissions';

@InputType('RoleDomainInput')
@Authorize(PermissionsAuthorizer([RolePermissions.PERMISSION_TO_VIEW]))
@ObjectType('RoleDomain')
@UnPagedRelation('modelHasRoles', () => ModelHasRole)
@UnPagedRelation('permissions', () => Permission)
export class Role {
  @IDField(() => ID)
  @FilterableField()
  id: number;

  @FilterableField()
  name: string;

  @FilterableField()
  guardName: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // These fields will be resolved via relation decorators above
  modelHasRoles?: ModelHasRole[];

  permissions?: Permission[];
}
