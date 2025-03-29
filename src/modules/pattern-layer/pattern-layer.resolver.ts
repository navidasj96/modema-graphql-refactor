import { Resolver } from '@nestjs/graphql';
import { PatternLayerService } from './pattern-layer.service';
import { PatternLayer } from '@/modules/pattern-layer/domain/pattern-layer';

@Resolver(() => PatternLayer)
export class PatternLayerResolver {
  constructor(private readonly patternLayerService: PatternLayerService) {}
}
