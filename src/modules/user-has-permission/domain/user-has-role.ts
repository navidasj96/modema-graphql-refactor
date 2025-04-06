import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('UserHasPermissionDomain')
@UnPagedRelation('user', () => User)
@UnPagedRelation('permission', () => Permission)
@ObjectType()
export class UserHasPermission {
  @IDField(() => ID)
  userId: number;

  @Field()
  permissionId: number;

  @Field(() => Permission)
  permission: Permission;
}
