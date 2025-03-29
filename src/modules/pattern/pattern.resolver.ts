import { Resolver } from '@nestjs/graphql';
import { PatternService } from './pattern.service';
import { Pattern } from '@/modules/pattern/domain/pattern';

@Resolver(() => Pattern)
export class PatternResolver {
  constructor(private readonly patternService: PatternService) {}
}
