import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { CampaignFreeOfferPure } from '@/modules/campaign-free-offer/domain/campaign-free-offer.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignFreeOfferSizePureDomain')
@ObjectType()
export class CampaignFreeOfferSizePure {
  @Field(() => ID)
  id: number;

  @Field()
  campaignFreeOfferId: number;

  @Field()
  basicCarpetSizeId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => CampaignFreeOfferPure)
  campaignFreeOffer: CampaignFreeOfferPure;
}
