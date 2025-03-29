import { Resolver } from '@nestjs/graphql';
import { NegotiationTypeService } from './negotiation-type.service';
import { NegotiationType } from '@/modules/negotiation-type/domain/negotiation-type';

@Resolver(() => NegotiationType)
export class NegotiationTypeResolver {
  constructor(
    private readonly negotiationTypeService: NegotiationTypeService,
  ) {}
}
