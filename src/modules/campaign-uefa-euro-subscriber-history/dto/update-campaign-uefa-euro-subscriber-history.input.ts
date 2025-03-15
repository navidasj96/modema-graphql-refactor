import { CreateCampaignUefaEuroSubscriberHistoryInput } from './create-campaign-uefa-euro-subscriber-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignUefaEuroSubscriberHistoryInput extends PartialType(CreateCampaignUefaEuroSubscriberHistoryInput) {
  @Field(() => Int)
  id: number;
}
