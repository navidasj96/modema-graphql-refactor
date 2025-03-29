import { Resolver } from '@nestjs/graphql';
import { ProductionPadStatusService } from './production-pad-status.service';
import { ProductionPadStatus } from '@/modules/production-pad-status/domain/production-pad-status';

@Resolver(() => ProductionPadStatus)
export class ProductionPadStatusResolver {
  constructor(
    private readonly productionPadStatusService: ProductionPadStatusService,
  ) {}
}
