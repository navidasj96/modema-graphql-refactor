import { CreateCampaignUefaEuroSubscriberInput } from './create-campaign-uefa-euro-subscriber.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignUefaEuroSubscriberInput extends PartialType(CreateCampaignUefaEuroSubscriberInput) {
  @Field(() => Int)
  id: number;
}
