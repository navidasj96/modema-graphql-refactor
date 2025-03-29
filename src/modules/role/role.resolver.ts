import { Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from '@/modules/role/domain/role';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}
}
