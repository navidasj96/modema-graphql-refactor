import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignRoomvoImageService } from './campaign-roomvo-image.service';
import { CreateCampaignRoomvoImageInput } from './dto/create-campaign-roomvo-image.input';
import { UpdateCampaignRoomvoImageInput } from './dto/update-campaign-roomvo-image.input';
import { CampaignRoomvoImage } from './domain/campaign-roomvo-image';

@Resolver(() => CampaignRoomvoImage)
export class CampaignRoomvoImageResolver {
  constructor(
    private readonly campaignRoomvoImageService: CampaignRoomvoImageService,
  ) {}

  @Mutation(() => CampaignRoomvoImage)
  createCampaignRoomvoImage(
    @Args('createCampaignRoomvoImageInput')
    createCampaignRoomvoImageInput: CreateCampaignRoomvoImageInput,
  ) {
    return this.campaignRoomvoImageService.create(
      createCampaignRoomvoImageInput,
    );
  }

  @Query(() => [CampaignRoomvoImage], { name: 'campaignRoomvoImage' })
  findAll() {
    return this.campaignRoomvoImageService.findAll();
  }

  @Query(() => CampaignRoomvoImage, { name: 'campaignRoomvoImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignRoomvoImageService.findOne(id);
  }

  @Mutation(() => CampaignRoomvoImage)
  updateCampaignRoomvoImage(
    @Args('updateCampaignRoomvoImageInput')
    updateCampaignRoomvoImageInput: UpdateCampaignRoomvoImageInput,
  ) {
    return this.campaignRoomvoImageService.update(
      updateCampaignRoomvoImageInput.id,
      updateCampaignRoomvoImageInput,
    );
  }

  @Mutation(() => CampaignRoomvoImage)
  removeCampaignRoomvoImage(@Args('id', { type: () => Int }) id: number) {
    return this.campaignRoomvoImageService.remove(id);
  }
}
