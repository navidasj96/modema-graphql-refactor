import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { ModelHasPermissionPure } from '@/modules/model-has-permission/domain/model-has-permission.pure';
import { PermissionGroupPure } from '@/modules/permission-group/domain/permission-group.pure';
import { RolePure } from '@/modules/role/domain/role.pure';

@InputType('PermissionPureDomain')
@ObjectType()
export class PermissionPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  guardName: string;

  @Field({ nullable: true })
  permissionGroupId?: number;

  @Field({ nullable: true })
  parentId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ModelHasPermissionPure])
  modelHasPermissions: ModelHasPermissionPure[];

  @Field(() => PermissionPure, { nullable: true })
  parent?: PermissionPure;

  @Field(() => [PermissionPure])
  permissions: PermissionPure[];

  @Field(() => PermissionGroupPure, { nullable: true })
  permissionGroup?: PermissionGroupPure;

  @Field(() => [RolePure])
  roles: RolePure[];
}
