import { Resolver } from '@nestjs/graphql';
import { GhazalService } from './ghazal.service';
import { Ghazal } from './domain/ghazal';

@Resolver(() => Ghazal)
export class GhazalResolver {
  constructor(private readonly ghazalService: GhazalService) {}
}
