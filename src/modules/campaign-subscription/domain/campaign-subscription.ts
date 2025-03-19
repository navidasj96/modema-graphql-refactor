import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class CampaignSubscription {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  campaignName?: string;

  @Field(() => Int)
  userId: number;

  @Field(() => Int, { nullable: true })
  code?: number;

  @Field(() => User)
  user: User;
}
