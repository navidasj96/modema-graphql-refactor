import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CampaignSubscriptionService } from './campaign-subscription.service';
import { CreateCampaignSubscriptionInput } from './dto/create-campaign-subscription.input';
import { UpdateCampaignSubscriptionInput } from './dto/update-campaign-subscription.input';
import { CampaignSubscription } from './domain/campaign-subscription';

@Resolver(() => CampaignSubscription)
export class CampaignSubscriptionResolver {
  constructor(
    private readonly campaignSubscriptionService: CampaignSubscriptionService,
  ) {}

  @Mutation(() => CampaignSubscription)
  createCampaignSubscription(
    @Args('createCampaignSubscriptionInput')
    createCampaignSubscriptionInput: CreateCampaignSubscriptionInput,
  ) {
    return this.campaignSubscriptionService.create(
      createCampaignSubscriptionInput,
    );
  }

  @Query(() => [CampaignSubscription], { name: 'campaignSubscription' })
  findAll() {
    return this.campaignSubscriptionService.findAll();
  }

  @Query(() => CampaignSubscription, { name: 'campaignSubscription' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignSubscriptionService.findOne(id);
  }

  @Mutation(() => CampaignSubscription)
  updateCampaignSubscription(
    @Args('updateCampaignSubscriptionInput')
    updateCampaignSubscriptionInput: UpdateCampaignSubscriptionInput,
  ) {
    return this.campaignSubscriptionService.update(
      updateCampaignSubscriptionInput.id,
      updateCampaignSubscriptionInput,
    );
  }

  @Mutation(() => CampaignSubscription)
  removeCampaignSubscription(@Args('id', { type: () => Int }) id: number) {
    return this.campaignSubscriptionService.remove(id);
  }
}
