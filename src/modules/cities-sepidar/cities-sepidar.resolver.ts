import { Resolver } from '@nestjs/graphql';
import { CitiesSepidarService } from './cities-sepidar.service';
import { CitiesSepidar } from './domain/cities-sepidar';

@Resolver(() => CitiesSepidar)
export class CitiesSepidarResolver {
  constructor(private readonly citiesSepidarService: CitiesSepidarService) {}
}
