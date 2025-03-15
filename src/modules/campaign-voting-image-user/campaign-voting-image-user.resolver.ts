import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignVotingImageUserService } from './campaign-voting-image-user.service';
import { CreateCampaignVotingImageUserInput } from './dto/create-campaign-voting-image-user.input';
import { UpdateCampaignVotingImageUserInput } from './dto/update-campaign-voting-image-user.input';
import { CampaignVotingImageUser } from './domain/campaign-voting-image-user';

@Resolver(() => CampaignVotingImageUser)
export class CampaignVotingImageUserResolver {
  constructor(
    private readonly campaignVotingImageUserService: CampaignVotingImageUserService,
  ) {}

  @Mutation(() => CampaignVotingImageUser)
  createCampaignVotingImageUser(
    @Args('createCampaignVotingImageUserInput')
    createCampaignVotingImageUserInput: CreateCampaignVotingImageUserInput,
  ) {
    return this.campaignVotingImageUserService.create(
      createCampaignVotingImageUserInput,
    );
  }

  @Query(() => [CampaignVotingImageUser], { name: 'campaignVotingImageUser' })
  findAll() {
    return this.campaignVotingImageUserService.findAll();
  }

  @Query(() => CampaignVotingImageUser, { name: 'campaignVotingImageUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignVotingImageUserService.findOne(id);
  }

  @Mutation(() => CampaignVotingImageUser)
  updateCampaignVotingImageUser(
    @Args('updateCampaignVotingImageUserInput')
    updateCampaignVotingImageUserInput: UpdateCampaignVotingImageUserInput,
  ) {
    return this.campaignVotingImageUserService.update(
      updateCampaignVotingImageUserInput.id,
      updateCampaignVotingImageUserInput,
    );
  }

  @Mutation(() => CampaignVotingImageUser)
  removeCampaignVotingImageUser(@Args('id', { type: () => Int }) id: number) {
    return this.campaignVotingImageUserService.remove(id);
  }
}
