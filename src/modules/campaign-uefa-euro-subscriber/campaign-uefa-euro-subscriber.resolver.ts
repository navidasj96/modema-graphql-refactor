import { Resolver } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberService } from './campaign-uefa-euro-subscriber.service';
import { CampaignUefaEuroSubscriber } from './domain/campaign-uefa-euro-subscriber';

@Resolver(() => CampaignUefaEuroSubscriber)
export class CampaignUefaEuroSubscriberResolver {
  constructor(
    private readonly campaignUefaEuroSubscriberService: CampaignUefaEuroSubscriberService
  ) {}
}
