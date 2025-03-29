import { Resolver } from '@nestjs/graphql';
import { CampaignRoomvoVoteService } from './campaign-roomvo-vote.service';
import { CampaignRoomvoVote } from './domain/campaign-roomvo-vote';

@Resolver(() => CampaignRoomvoVote)
export class CampaignRoomvoVoteResolver {
  constructor(
    private readonly campaignRoomvoVoteService: CampaignRoomvoVoteService,
  ) {}
}
