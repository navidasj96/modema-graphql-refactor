import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('UserHasRoleDomain')
@UnPagedRelation('user', () => User)
@ObjectType()
export class UserHasRole {
  @IDField(() => ID)
  userId: number;

  @Field()
  roleId: number;
}
