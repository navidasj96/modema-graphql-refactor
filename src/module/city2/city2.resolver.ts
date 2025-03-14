import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { City2Service } from './city2.service';
import { CreateCity2Input } from './dto/create-city2.input';
import { UpdateCity2Input } from './dto/update-city2.input';
import { City2 } from './domain/city2';

@Resolver(() => City2)
export class City2Resolver {
  constructor(private readonly city2Service: City2Service) {}

  @Mutation(() => City2)
  createCity2(@Args('createCity2Input') createCity2Input: CreateCity2Input) {
    return this.city2Service.create(createCity2Input);
  }

  @Query(() => [City2], { name: 'city2' })
  findAll() {
    return this.city2Service.findAll();
  }

  @Query(() => City2, { name: 'city2' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.city2Service.findOne(id);
  }

  @Mutation(() => City2)
  updateCity2(@Args('updateCity2Input') updateCity2Input: UpdateCity2Input) {
    return this.city2Service.update(updateCity2Input.id, updateCity2Input);
  }

  @Mutation(() => City2)
  removeCity2(@Args('id', { type: () => Int }) id: number) {
    return this.city2Service.remove(id);
  }
}
