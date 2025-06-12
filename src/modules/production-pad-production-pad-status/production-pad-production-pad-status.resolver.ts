import { Resolver } from '@nestjs/graphql';
import { ProductionPadProductionPadStatusService } from './production-pad-production-pad-status.service';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';

@Resolver(() => ProductionPadProductionPadStatus)
export class ProductionPadProductionPadStatusResolver {
  constructor(
    private readonly productionPadProductionPadStatusService: ProductionPadProductionPadStatusService
  ) {}
}
