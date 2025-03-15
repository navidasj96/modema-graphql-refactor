import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCampaignFreeOfferSizeInput {
  @Field()
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
