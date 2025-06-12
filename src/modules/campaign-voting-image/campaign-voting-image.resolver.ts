import { Resolver } from '@nestjs/graphql';
import { CampaignVotingImageService } from './campaign-voting-image.service';
import { CampaignVotingImage } from './domain/campaign-voting-image';

@Resolver(() => CampaignVotingImage)
export class CampaignVotingImageResolver {
  constructor(
    private readonly campaignVotingImageService: CampaignVotingImageService
  ) {}
}
