import { Resolver } from '@nestjs/graphql';
import { ChaparSettlementStatusService } from './chapar-settlement-status.service';
import { ChaparSettlementStatus } from './domain/chapar-settlement-status';

@Resolver(() => ChaparSettlementStatus)
export class ChaparSettlementStatusResolver {
  constructor(
    private readonly chaparSettlementStatusService: ChaparSettlementStatusService,
  ) {}
}
