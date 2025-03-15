import { CreateCampaignFreeOfferInput } from './create-campaign-free-offer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignFreeOfferInput extends PartialType(CreateCampaignFreeOfferInput) {
  @Field(() => Int)
  id: number;
}
