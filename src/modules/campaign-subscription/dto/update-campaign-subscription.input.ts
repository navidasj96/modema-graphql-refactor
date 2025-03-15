import { CreateCampaignSubscriptionInput } from './create-campaign-subscription.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignSubscriptionInput extends PartialType(CreateCampaignSubscriptionInput) {
  @Field(() => Int)
  id: number;
}
