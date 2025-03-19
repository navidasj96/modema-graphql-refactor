import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { CampaignFreeOffer } from '@/modules/campaign-free-offer/domain/campaign-free-offer';

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

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => CampaignFreeOffer)
  campaignFreeOffer: CampaignFreeOffer;
}
