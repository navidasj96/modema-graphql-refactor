import { Resolver } from '@nestjs/graphql';
import { CarpetUsagePlaceService } from './carpet-usage-place.service';
import { CarpetUsagePlace } from './domain/carpet-usage-place';

@Resolver(() => CarpetUsagePlace)
export class CarpetUsagePlaceResolver {
  constructor(
    private readonly carpetUsagePlaceService: CarpetUsagePlaceService
  ) {}
}
