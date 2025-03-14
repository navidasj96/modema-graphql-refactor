import { CreateCampaignFreeOfferSizeInput } from './create-campaign-free-offer-size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignFreeOfferSizeInput extends PartialType(CreateCampaignFreeOfferSizeInput) {
  @Field(() => Int)
  id: number;
}
