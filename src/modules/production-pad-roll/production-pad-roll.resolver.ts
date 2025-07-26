import { Resolver } from '@nestjs/graphql';
import { ProductionPadRollService } from './production-pad-roll.service';
import { ProductionPadRoll } from '@/modules/production-pad-roll/domain/production-pad-roll.entity';

@Resolver(() => ProductionPadRoll)
export class ProductionPadRollResolver {
  constructor(
    private readonly productionPadRollService: ProductionPadRollService
  ) {}
}
