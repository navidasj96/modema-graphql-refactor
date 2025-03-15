import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignVotingImageService } from './campaign-voting-image.service';
import { CreateCampaignVotingImageInput } from './dto/create-campaign-voting-image.input';
import { UpdateCampaignVotingImageInput } from './dto/update-campaign-voting-image.input';
import { CampaignVotingImage } from './domain/campaign-voting-image';

@Resolver(() => CampaignVotingImage)
export class CampaignVotingImageResolver {
  constructor(
    private readonly campaignVotingImageService: CampaignVotingImageService,
  ) {}

  @Mutation(() => CampaignVotingImage)
  createCampaignVotingImage(
    @Args('createCampaignVotingImageInput')
    createCampaignVotingImageInput: CreateCampaignVotingImageInput,
  ) {
    return this.campaignVotingImageService.create(
      createCampaignVotingImageInput,
    );
  }

  @Query(() => [CampaignVotingImage], { name: 'campaignVotingImage' })
  findAll() {
    return this.campaignVotingImageService.findAll();
  }

  @Query(() => CampaignVotingImage, { name: 'campaignVotingImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignVotingImageService.findOne(id);
  }

  @Mutation(() => CampaignVotingImage)
  updateCampaignVotingImage(
    @Args('updateCampaignVotingImageInput')
    updateCampaignVotingImageInput: UpdateCampaignVotingImageInput,
  ) {
    return this.campaignVotingImageService.update(
      updateCampaignVotingImageInput.id,
      updateCampaignVotingImageInput,
    );
  }

  @Mutation(() => CampaignVotingImage)
  removeCampaignVotingImage(@Args('id', { type: () => Int }) id: number) {
    return this.campaignVotingImageService.remove(id);
  }
}
