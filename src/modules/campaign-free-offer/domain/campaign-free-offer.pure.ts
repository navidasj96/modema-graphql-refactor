import { CampaignFreeOfferSizePure } from '@/modules/campaign-free-offer-size/domain/campaign-free-offer-size.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignFreeOfferPureDomain')
@ObjectType()
export class CampaignFreeOfferPure {
  @Field(() => ID)
  id: number;

  @Field()
  minPrice: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CampaignFreeOfferSizePure])
  campaignFreeOfferSizes: CampaignFreeOfferSizePure[];
}
