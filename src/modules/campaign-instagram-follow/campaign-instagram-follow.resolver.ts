import { Resolver } from '@nestjs/graphql';
import { CampaignInstagramFollowService } from './campaign-instagram-follow.service';
import { CampaignInstagramFollow } from './domain/campaign-instagram-follow';

@Resolver(() => CampaignInstagramFollow)
export class CampaignInstagramFollowResolver {
  constructor(
    private readonly campaignInstagramFollowService: CampaignInstagramFollowService,
  ) {}
}
