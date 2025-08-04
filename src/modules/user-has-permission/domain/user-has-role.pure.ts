import { PermissionPure } from '@/modules/permission/domain/permission.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UserHasPermissionPureDomain')
@ObjectType()
export class UserHasPermissionPure {
  @Field(() => ID)
  userId: number;

  @Field()
  permissionId: number;

  @Field(() => PermissionPure)
  permission: PermissionPure;
}
