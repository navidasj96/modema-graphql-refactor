import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CampaignFreeOfferSize {
  @IDField(() => ID)
  id: number;

  @Field()
  campaignFreeOfferId: number;

  @Field()
  basicCarpetSizeId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
