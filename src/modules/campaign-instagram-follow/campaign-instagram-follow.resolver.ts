import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignInstagramFollowService } from './campaign-instagram-follow.service';
import { CreateCampaignInstagramFollowInput } from './dto/create-campaign-instagram-follow.input';
import { UpdateCampaignInstagramFollowInput } from './dto/update-campaign-instagram-follow.input';
import { CampaignInstagramFollow } from './domain/campaign-instagram-follow';

@Resolver(() => CampaignInstagramFollow)
export class CampaignInstagramFollowResolver {
  constructor(
    private readonly campaignInstagramFollowService: CampaignInstagramFollowService,
  ) {}

  @Mutation(() => CampaignInstagramFollow)
  createCampaignInstagramFollow(
    @Args('createCampaignInstagramFollowInput')
    createCampaignInstagramFollowInput: CreateCampaignInstagramFollowInput,
  ) {
    return this.campaignInstagramFollowService.create(
      createCampaignInstagramFollowInput,
    );
  }

  @Query(() => [CampaignInstagramFollow], { name: 'campaignInstagramFollow' })
  findAll() {
    return this.campaignInstagramFollowService.findAll();
  }

  @Query(() => CampaignInstagramFollow, { name: 'campaignInstagramFollow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignInstagramFollowService.findOne(id);
  }

  @Mutation(() => CampaignInstagramFollow)
  updateCampaignInstagramFollow(
    @Args('updateCampaignInstagramFollowInput')
    updateCampaignInstagramFollowInput: UpdateCampaignInstagramFollowInput,
  ) {
    return this.campaignInstagramFollowService.update(
      updateCampaignInstagramFollowInput.id,
      updateCampaignInstagramFollowInput,
    );
  }

  @Mutation(() => CampaignInstagramFollow)
  removeCampaignInstagramFollow(@Args('id', { type: () => Int }) id: number) {
    return this.campaignInstagramFollowService.remove(id);
  }
}
