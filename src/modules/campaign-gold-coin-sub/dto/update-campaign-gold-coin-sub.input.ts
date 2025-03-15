import { CreateCampaignGoldCoinSubInput } from './create-campaign-gold-coin-sub.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignGoldCoinSubInput extends PartialType(
  CreateCampaignGoldCoinSubInput,
) {
  @Field(() => Int)
  id: number;
}
