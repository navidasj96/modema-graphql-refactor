import { Resolver } from '@nestjs/graphql';
import { NegotiationStatusService } from './negotiation-status.service';
import { NegotiationStatus } from '@/modules/negotiation-status/domain/negotiation-status';

@Resolver(() => NegotiationStatus)
export class NegotiationStatusResolver {
  constructor(
    private readonly negotiationStatusService: NegotiationStatusService
  ) {}
}
