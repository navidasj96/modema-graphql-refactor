import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('ImpersonateHistoryDomain')
@ObjectType()
export class ImpersonateHistory {
  @IDField(() => ID)
  id: string;

  @Field()
  userId: number;

  @Field()
  impersonateUserId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User, { nullable: true })
  impersonateUser?: User;

  @Field(() => User, { nullable: true })
  user?: User;
}
