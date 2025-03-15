import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignPetFormService } from './campaign-pet-form.service';
import { CreateCampaignPetFormInput } from './dto/create-campaign-pet-form.input';
import { UpdateCampaignPetFormInput } from './dto/update-campaign-pet-form.input';
import { CampaignPetForm } from './domain/campaign-pet-form';

@Resolver(() => CampaignPetForm)
export class CampaignPetFormResolver {
  constructor(
    private readonly campaignPetFormService: CampaignPetFormService,
  ) {}

  @Mutation(() => CampaignPetForm)
  createCampaignPetForm(
    @Args('createCampaignPetFormInput')
    createCampaignPetFormInput: CreateCampaignPetFormInput,
  ) {
    return this.campaignPetFormService.create(createCampaignPetFormInput);
  }

  @Query(() => [CampaignPetForm], { name: 'campaignPetForm' })
  findAll() {
    return this.campaignPetFormService.findAll();
  }

  @Query(() => CampaignPetForm, { name: 'campaignPetForm' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignPetFormService.findOne(id);
  }

  @Mutation(() => CampaignPetForm)
  updateCampaignPetForm(
    @Args('updateCampaignPetFormInput')
    updateCampaignPetFormInput: UpdateCampaignPetFormInput,
  ) {
    return this.campaignPetFormService.update(
      updateCampaignPetFormInput.id,
      updateCampaignPetFormInput,
    );
  }

  @Mutation(() => CampaignPetForm)
  removeCampaignPetForm(@Args('id', { type: () => Int }) id: number) {
    return this.campaignPetFormService.remove(id);
  }
}
