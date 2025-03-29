import { Resolver } from '@nestjs/graphql';
import { CampaignGoldCoinSubService } from './campaign-gold-coin-sub.service';
import { CampaignGoldCoinSub } from './domain/campaign-gold-coin-sub';

@Resolver(() => CampaignGoldCoinSub)
export class CampaignGoldCoinSubResolver {
  constructor(
    private readonly campaignGoldCoinSubService: CampaignGoldCoinSubService,
  ) {}
}
