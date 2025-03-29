import { Resolver } from '@nestjs/graphql';
import { UserUtmService } from './user-utm.service';
import { UserUtm } from '@/modules/user-utm/domain/user-utm';

@Resolver(() => UserUtm)
export class UserUtmResolver {
  constructor(private readonly userUtmService: UserUtmService) {}
}
