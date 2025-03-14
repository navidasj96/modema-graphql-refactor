import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignRoomvoVoteInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  campaignRoomvoImageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
