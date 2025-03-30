import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('UserHasPermissionDomain')
@UnPagedRelation('user', () => User)
@ObjectType()
export class UserHasPermission {
  @IDField(() => ID)
  userId: number;

  @Field()
  permissionId: number;

  @Field(() => User)
  user: User;
}
