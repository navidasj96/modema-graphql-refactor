import { Resolver } from '@nestjs/graphql';
import { CampaignVotingImageUserService } from './campaign-voting-image-user.service';
import { CampaignVotingImageUser } from './domain/campaign-voting-image-user';

@Resolver(() => CampaignVotingImageUser)
export class CampaignVotingImageUserResolver {
  constructor(
    private readonly campaignVotingImageUserService: CampaignVotingImageUserService,
  ) {}
}
