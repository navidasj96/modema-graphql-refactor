import { CreateCampaignPetFormInput } from './create-campaign-pet-form.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignPetFormInput extends PartialType(CreateCampaignPetFormInput) {
  @Field(() => Int)
  id: number;
}
