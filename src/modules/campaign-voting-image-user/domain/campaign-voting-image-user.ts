import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@InputType('CampaignVotingImageUserDomain')
@ObjectType()
export class CampaignVotingImageUser {
  @IDField(() => ID)
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
