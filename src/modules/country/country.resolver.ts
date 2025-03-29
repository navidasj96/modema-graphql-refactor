import { Resolver } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './domain/country';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}
}
