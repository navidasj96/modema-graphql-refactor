import { CreateCampaignInstagramFollowInput } from './create-campaign-instagram-follow.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignInstagramFollowInput extends PartialType(CreateCampaignInstagramFollowInput) {
  @Field(() => Int)
  id: number;
}
