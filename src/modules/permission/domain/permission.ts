import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { ModelHasPermission } from '@/modules/model-has-permission/domain/model-has-permission';
import { PermissionGroup } from '@/modules/permission-group/domain/permission-group';
import { Role } from '@/modules/role/domain/role';

@InputType('PermissionDomain')
@UnPagedRelation('parent', () => Permission)
@UnPagedRelation('roles', () => Role)
@QueryOptions({ pagingStrategy: PagingStrategies.NONE })
@ObjectType()
export class Permission {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  guardName: string;

  @FilterableField({ nullable: true })
  permissionGroupId?: number;

  @FilterableField({ nullable: true })
  parentId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ModelHasPermission])
  modelHasPermissions: ModelHasPermission[];

  @Field(() => Permission, { nullable: true })
  parent?: Permission;

  @Field(() => [Permission])
  permissions: Permission[];

  @Field(() => PermissionGroup, { nullable: true })
  permissionGroup?: PermissionGroup;

  @Field(() => [Role])
  roles: Role[];
}
