import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

@InputType('CreateCampaignGoldCoinSubInput')
export class CreateCampaignGoldCoinSubInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  userId: number;

  @Field(() => User)
  user: User;
}
