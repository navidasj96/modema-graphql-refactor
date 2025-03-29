import { Resolver } from '@nestjs/graphql';
import { WonderfulOfferService } from './wonderful-offer.service';
import { WonderfulOffer } from '@/modules/wonderful-offer/domain/wonderful-offer';

@Resolver(() => WonderfulOffer)
export class WonderfulOfferResolver {
  constructor(private readonly wonderfulOfferService: WonderfulOfferService) {}
}
