import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignGoldCoinSubPureDomain')
@ObjectType()
export class CampaignGoldCoinSubPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  userId: number;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
