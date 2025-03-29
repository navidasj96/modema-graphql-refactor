import { Resolver } from '@nestjs/graphql';
import { ProductionRollService } from './production-roll.service';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';

@Resolver(() => ProductionRoll)
export class ProductionRollResolver {
  constructor(private readonly productionRollService: ProductionRollService) {}
}
