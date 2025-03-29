import { Resolver } from '@nestjs/graphql';
import { CampaignFreeOfferSizeService } from './campaign-free-offer-size.service';
import { CampaignFreeOfferSize } from './domain/campaign-free-offer-size';

@Resolver(() => CampaignFreeOfferSize)
export class CampaignFreeOfferSizeResolver {
  constructor(
    private readonly campaignFreeOfferSizeService: CampaignFreeOfferSizeService,
  ) {}
}
