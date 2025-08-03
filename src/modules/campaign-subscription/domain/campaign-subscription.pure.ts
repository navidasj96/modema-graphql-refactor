import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType('CampaignSubscriptionPureDomain')
@ObjectType()
export class CampaignSubscriptionPure {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;
}
