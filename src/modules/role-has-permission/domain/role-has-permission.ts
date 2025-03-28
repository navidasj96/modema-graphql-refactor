import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('RoleHasPermissionDomain')
@ObjectType()
export class RoleHasPermission {
  @IDField(() => ID)
  permissionId: number;

  @Field()
  roleId: string;
}
