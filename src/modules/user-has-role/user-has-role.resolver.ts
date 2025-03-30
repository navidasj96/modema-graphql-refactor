import { Resolver } from '@nestjs/graphql';
import { UserHasRoleService } from './user-has-role.service';
import { UserHasRole } from './domain/user-has-role';

@Resolver(() => UserHasRole)
export class UserHasRoleResolver {
  constructor(private readonly userHasRoleService: UserHasRoleService) {}
}
