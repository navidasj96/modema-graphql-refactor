import { Field, InputType } from '@nestjs/graphql';
import { ModelHasPermission } from '@/modules/model-has-permission/domain/model-has-permission';
import { PermissionGroup } from '@/modules/permission-group/domain/permission-group';
import { Role } from '@/modules/role/domain/role';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('CreatePermissionInput')
export class CreatePermissionInput {
  @Field()
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
