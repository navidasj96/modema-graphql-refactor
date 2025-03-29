import { Resolver } from '@nestjs/graphql';
import { SpecialOfferService } from './special-offer.service';
import { SpecialOffer } from '@/modules/special-offer/domain/special-offer';

@Resolver(() => SpecialOffer)
export class SpecialOfferResolver {
  constructor(private readonly specialOfferService: SpecialOfferService) {}
}
