import { CreateCampaignVotingImageInput } from './create-campaign-voting-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignVotingImageInput extends PartialType(CreateCampaignVotingImageInput) {
  @Field(() => Int)
  id: number;
}
