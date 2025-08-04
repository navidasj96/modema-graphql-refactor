import { RolePure } from '@/modules/role/domain/role.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UserHasRolePureDomain')
@ObjectType()
export class UserHasRolePure {
  @Field(() => ID)
  userId: number;

  @Field()
  roleId: number;

  @Field(() => RolePure)
  role: RolePure;
}
