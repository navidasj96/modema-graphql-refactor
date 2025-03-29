import { Resolver } from '@nestjs/graphql';
import { NegotiationService } from './negotiation.service';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';

@Resolver(() => Negotiation)
export class NegotiationResolver {
  constructor(private readonly negotiationService: NegotiationService) {}
}
