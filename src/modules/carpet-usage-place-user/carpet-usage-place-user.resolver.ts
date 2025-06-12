import { Resolver } from '@nestjs/graphql';
import { CarpetUsagePlaceUserService } from './carpet-usage-place-user.service';
import { CarpetUsagePlaceUser } from './domain/carpet-usage-place-user';

@Resolver(() => CarpetUsagePlaceUser)
export class CarpetUsagePlaceUserResolver {
  constructor(
    private readonly carpetUsagePlaceUserService: CarpetUsagePlaceUserService
  ) {}
}
