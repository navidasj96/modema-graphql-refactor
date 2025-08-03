import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ImpersonateHistoryPureDomain')
@ObjectType()
export class ImpersonateHistoryPure {
  @Field(() => ID)
  id: string;

  @Field()
  userId: number;

  @Field()
  impersonateUserId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure, { nullable: true })
  impersonateUser?: UserPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
