import { Resolver } from '@nestjs/graphql';
import { CampaignFreeOfferService } from './campaign-free-offer.service';
import { CampaignFreeOffer } from './domain/campaign-free-offer';

@Resolver(() => CampaignFreeOffer)
export class CampaignFreeOfferResolver {
  constructor(
    private readonly campaignFreeOfferService: CampaignFreeOfferService
  ) {}
}
