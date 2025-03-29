import { Resolver } from '@nestjs/graphql';
import { City2Service } from './city2.service';
import { City2 } from './domain/city2';

@Resolver(() => City2)
export class City2Resolver {
  constructor(private readonly city2Service: City2Service) {}
}
