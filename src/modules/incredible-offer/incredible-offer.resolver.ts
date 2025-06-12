import { Resolver } from '@nestjs/graphql';
import { IncredibleOfferService } from './incredible-offer.service';
import { IncredibleOffer } from '@/modules/incredible-offer/domain/incredible-offer';

@Resolver(() => IncredibleOffer)
export class IncredibleOfferResolver {
  constructor(
    private readonly incredibleOfferService: IncredibleOfferService
  ) {}
}
