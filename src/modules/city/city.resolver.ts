import { Resolver } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './domain/city';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}
}
