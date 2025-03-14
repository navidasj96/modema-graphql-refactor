import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CampaignRoomvoVote {
  @IDField(() => ID)
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
