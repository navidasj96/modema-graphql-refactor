import { Resolver } from '@nestjs/graphql';
import { CarpetFeatureUserService } from './carpet-feature-user.service';
import { CarpetFeatureUser } from './domain/carpet-feature-user';

@Resolver(() => CarpetFeatureUser)
export class CarpetFeatureUserResolver {
  constructor(
    private readonly carpetFeatureUserService: CarpetFeatureUserService,
  ) {}
}
