import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignGoldCoinSubInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  userId: number;
}
