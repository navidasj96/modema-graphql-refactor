import { Resolver } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberHistoryService } from './campaign-uefa-euro-subscriber-history.service';
import { CampaignUefaEuroSubscriberHistory } from './domain/campaign-uefa-euro-subscriber-history';

@Resolver(() => CampaignUefaEuroSubscriberHistory)
export class CampaignUefaEuroSubscriberHistoryResolver {
  constructor(
    private readonly campaignUefaEuroSubscriberHistoryService: CampaignUefaEuroSubscriberHistoryService
  ) {}
}
