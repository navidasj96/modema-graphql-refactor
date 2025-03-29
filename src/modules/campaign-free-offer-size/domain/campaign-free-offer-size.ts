import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { CampaignFreeOffer } from '@/modules/campaign-free-offer/domain/campaign-free-offer';

@InputType('CampaignFreeOfferSizeDomain')
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

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => CampaignFreeOffer)
  campaignFreeOffer: CampaignFreeOffer;
}
