import { CreateCampaignRoomvoVoteInput } from './create-campaign-roomvo-vote.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignRoomvoVoteInput extends PartialType(CreateCampaignRoomvoVoteInput) {
  @Field(() => Int)
  id: number;
}
