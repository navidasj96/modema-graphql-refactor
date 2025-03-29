import { Resolver } from '@nestjs/graphql';
import { CarpetFeatureService } from './carpet-feature.service';
import { CarpetFeature } from './domain/carpet-feature';

@Resolver(() => CarpetFeature)
export class CarpetFeatureResolver {
  constructor(private readonly carpetFeatureService: CarpetFeatureService) {}
}
