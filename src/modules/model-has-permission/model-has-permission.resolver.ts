import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModelHasPermissionService } from './model-has-permission.service';
import { CreateModelHasPermissionInput } from './dto/create-model-has-permission.input';
import { UpdateModelHasPermissionInput } from './dto/update-model-has-permission.input';
import { ModelHasPermission } from '@/modules/model-has-permission/domain/model-has-permission';

@Resolver(() => ModelHasPermission)
export class ModelHasPermissionResolver {
  constructor(
    private readonly modelHasPermissionService: ModelHasPermissionService,
  ) {}

  @Mutation(() => ModelHasPermission)
  createModelHasPermission(
    @Args('createModelHasPermissionInput')
    createModelHasPermissionInput: CreateModelHasPermissionInput,
  ) {
    return this.modelHasPermissionService.create(createModelHasPermissionInput);
  }

  @Query(() => [ModelHasPermission], { name: 'modelHasPermission' })
  findAll() {
    return this.modelHasPermissionService.findAll();
  }

  @Query(() => ModelHasPermission, { name: 'modelHasPermission' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.modelHasPermissionService.findOne(id);
  }

  @Mutation(() => ModelHasPermission)
  updateModelHasPermission(
    @Args('updateModelHasPermissionInput')
    updateModelHasPermissionInput: UpdateModelHasPermissionInput,
  ) {
    return this.modelHasPermissionService.update(
      updateModelHasPermissionInput.id,
      updateModelHasPermissionInput,
    );
  }

  @Mutation(() => ModelHasPermission)
  removeModelHasPermission(@Args('id', { type: () => Int }) id: number) {
    return this.modelHasPermissionService.remove(id);
  }
}
