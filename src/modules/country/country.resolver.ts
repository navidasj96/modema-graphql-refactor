import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { Country } from './domain/country';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country)
  createCountry(
    @Args('createCountryInput') createCountryInput: CreateCountryInput,
  ) {
    return this.countryService.create(createCountryInput);
  }

  @Query(() => [Country], { name: 'country' })
  findAll() {
    return this.countryService.findAll();
  }

  @Query(() => Country, { name: 'country' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.countryService.findOne(id);
  }

  @Mutation(() => Country)
  updateCountry(
    @Args('updateCountryInput') updateCountryInput: UpdateCountryInput,
  ) {
    return this.countryService.update(
      updateCountryInput.id,
      updateCountryInput,
    );
  }

  @Mutation(() => Country)
  removeCountry(@Args('id', { type: () => Int }) id: number) {
    return this.countryService.remove(id);
  }
}
