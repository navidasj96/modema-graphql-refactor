import { Resolver } from '@nestjs/graphql';
import { ModelHasRoleService } from './model-has-role.service';
import { ModelHasRole } from '@/modules/model-has-role/domain/model-has-role';

@Resolver(() => ModelHasRole)
export class ModelHasRoleResolver {
  constructor(private readonly modelHasRoleService: ModelHasRoleService) {}
}
