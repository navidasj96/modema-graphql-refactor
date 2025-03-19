import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateCampaignVotingImageUserInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  votedCampaignImageIds?: string;

  @Field({ defaultValue: false })
  walletCharged: boolean;

  @Field({ defaultValue: '0.00' })
  chargedAmount: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User)
  user: User;
}
