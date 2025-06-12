import { Resolver } from '@nestjs/graphql';
import { NegotiationHistoryService } from './negotiation-history.service';
import { NegotiationHistory } from '@/modules/negotiation-history/domain/negotiation-history';

@Resolver(() => NegotiationHistory)
export class NegotiationHistoryResolver {
  constructor(
    private readonly negotiationHistoryService: NegotiationHistoryService
  ) {}
}
