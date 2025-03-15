import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ModelHasRoleService } from './model-has-role.service';
import { CreateModelHasRoleInput } from './dto/create-model-has-role.input';
import { UpdateModelHasRoleInput } from './dto/update-model-has-role.input';
import { ModelHasRole } from '@/modules/model-has-role/domain/model-has-role';

@Resolver(() => ModelHasRole)
export class ModelHasRoleResolver {
  constructor(private readonly modelHasRoleService: ModelHasRoleService) {}

  @Mutation(() => ModelHasRole)
  createModelHasRole(
    @Args('createModelHasRoleInput')
    createModelHasRoleInput: CreateModelHasRoleInput,
  ) {
    return this.modelHasRoleService.create(createModelHasRoleInput);
  }

  @Query(() => [ModelHasRole], { name: 'modelHasRole' })
  findAll() {
    return this.modelHasRoleService.findAll();
  }

  @Query(() => ModelHasRole, { name: 'modelHasRole' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.modelHasRoleService.findOne(id);
  }

  @Mutation(() => ModelHasRole)
  updateModelHasRole(
    @Args('updateModelHasRoleInput')
    updateModelHasRoleInput: UpdateModelHasRoleInput,
  ) {
    return this.modelHasRoleService.update(
      updateModelHasRoleInput.id,
      updateModelHasRoleInput,
    );
  }

  @Mutation(() => ModelHasRole)
  removeModelHasRole(@Args('id', { type: () => Int }) id: number) {
    return this.modelHasRoleService.remove(id);
  }
}
