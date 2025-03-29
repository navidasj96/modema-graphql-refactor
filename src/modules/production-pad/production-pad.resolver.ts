import { Resolver } from '@nestjs/graphql';
import { ProductionPadService } from './production-pad.service';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';

@Resolver(() => ProductionPad)
export class ProductionPadResolver {
  constructor(private readonly productionPadService: ProductionPadService) {}
}
