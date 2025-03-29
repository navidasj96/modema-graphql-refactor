import { Resolver } from '@nestjs/graphql';
import { ModelHasPermissionService } from './model-has-permission.service';
import { ModelHasPermission } from '@/modules/model-has-permission/domain/model-has-permission';

@Resolver(() => ModelHasPermission)
export class ModelHasPermissionResolver {
  constructor(
    private readonly modelHasPermissionService: ModelHasPermissionService,
  ) {}
}
