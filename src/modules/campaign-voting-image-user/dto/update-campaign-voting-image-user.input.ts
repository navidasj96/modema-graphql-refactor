import { CreateCampaignVotingImageUserInput } from './create-campaign-voting-image-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignVotingImageUserInput extends PartialType(CreateCampaignVotingImageUserInput) {
  @Field(() => Int)
  id: number;
}
