import { Field, InputType, Int } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateCampaignSubscriptionInput {
  @Field(() => Int)
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
