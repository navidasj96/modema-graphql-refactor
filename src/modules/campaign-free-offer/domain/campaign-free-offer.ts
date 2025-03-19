import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CampaignFreeOfferSize } from '@/modules/campaign-free-offer-size/domain/campaign-free-offer-size';

@ObjectType()
export class CampaignFreeOffer {
  @IDField(() => ID)
  id: number;

  @Field()
  minPrice: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CampaignFreeOfferSize])
  campaignFreeOfferSizes: CampaignFreeOfferSize[];
}
