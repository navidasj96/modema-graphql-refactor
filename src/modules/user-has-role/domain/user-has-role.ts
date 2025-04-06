import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { Role } from '@/modules/role/domain/role';

@InputType('UserHasRoleDomain')
@UnPagedRelation('user', () => User)
@UnPagedRelation('role', () => Role)
@ObjectType()
export class UserHasRole {
  @IDField(() => ID)
  userId: number;

  @Field()
  roleId: number;

  @Field(() => Role)
  role: Role;
}
