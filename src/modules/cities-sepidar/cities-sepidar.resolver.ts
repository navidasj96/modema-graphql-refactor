import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CitiesSepidarService } from './cities-sepidar.service';
import { CreateCitiesSepidarInput } from './dto/create-cities-sepidar.input';
import { UpdateCitiesSepidarInput } from './dto/update-cities-sepidar.input';
import { CitiesSepidar } from './domain/cities-sepidar';

@Resolver(() => CitiesSepidar)
export class CitiesSepidarResolver {
  constructor(private readonly citiesSepidarService: CitiesSepidarService) {}

  @Mutation(() => CitiesSepidar)
  createCitiesSepidar(
    @Args('createCitiesSepidarInput')
    createCitiesSepidarInput: CreateCitiesSepidarInput,
  ) {
    return this.citiesSepidarService.create(createCitiesSepidarInput);
  }

  @Query(() => [CitiesSepidar], { name: 'citiesSepidar' })
  findAll() {
    return this.citiesSepidarService.findAll();
  }

  @Query(() => CitiesSepidar, { name: 'citiesSepidar' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.citiesSepidarService.findOne(id);
  }

  @Mutation(() => CitiesSepidar)
  updateCitiesSepidar(
    @Args('updateCitiesSepidarInput')
    updateCitiesSepidarInput: UpdateCitiesSepidarInput,
  ) {
    return this.citiesSepidarService.update(
      updateCitiesSepidarInput.id,
      updateCitiesSepidarInput,
    );
  }

  @Mutation(() => CitiesSepidar)
  removeCitiesSepidar(@Args('id', { type: () => Int }) id: number) {
    return this.citiesSepidarService.remove(id);
  }
}
