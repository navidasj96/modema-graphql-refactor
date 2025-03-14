import { CreateCampaignRoomvoImageInput } from './create-campaign-roomvo-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignRoomvoImageInput extends PartialType(CreateCampaignRoomvoImageInput) {
  @Field(() => Int)
  id: number;
}
