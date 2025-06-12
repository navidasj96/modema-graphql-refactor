import { Resolver } from '@nestjs/graphql';
import { CampaignPetFormService } from './campaign-pet-form.service';
import { CampaignPetForm } from './domain/campaign-pet-form';

@Resolver(() => CampaignPetForm)
export class CampaignPetFormResolver {
  constructor(
    private readonly campaignPetFormService: CampaignPetFormService
  ) {}
}
