import { Resolver } from '@nestjs/graphql';
import { CampaignSubscriptionService } from './campaign-subscription.service';
import { CampaignSubscription } from './domain/campaign-subscription';

@Resolver(() => CampaignSubscription)
export class CampaignSubscriptionResolver {
  constructor(
    private readonly campaignSubscriptionService: CampaignSubscriptionService
  ) {}
}
