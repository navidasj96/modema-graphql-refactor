import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignVotingImageUserDomain')
@ObjectType()
export class CampaignVotingImageUser {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;
}
