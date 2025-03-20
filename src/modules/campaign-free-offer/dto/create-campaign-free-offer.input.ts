import { Field, InputType } from '@nestjs/graphql';
import { CampaignFreeOfferSize } from '@/modules/campaign-free-offer-size/domain/campaign-free-offer-size';

@InputType('CreateCampaignFreeOfferInput')
export class CreateCampaignFreeOfferInput {
  @Field()
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
