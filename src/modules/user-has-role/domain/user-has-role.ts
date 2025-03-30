import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('UserHasRoleDomain')
@ObjectType()
export class UserHasRole {
  @IDField(() => ID)
  userId: number;

  @Field()
  roleId: number;
}
