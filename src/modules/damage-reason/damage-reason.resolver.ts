import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DamageReasonService } from './damage-reason.service';
import { CreateDamageReasonInput } from './dto/create-damage-reason.input';
import { UpdateDamageReasonInput } from './dto/update-damage-reason.input';
import { DamageReason } from './domain/damage-reason';

@Resolver(() => DamageReason)
export class DamageReasonResolver {
  constructor(private readonly damageReasonService: DamageReasonService) {}

  @Mutation(() => DamageReason)
  createDamageReason(
    @Args('createDamageReasonInput')
    createDamageReasonInput: CreateDamageReasonInput,
  ) {
    return this.damageReasonService.create(createDamageReasonInput);
  }

  @Query(() => [DamageReason], { name: 'damageReason' })
  findAll() {
    return this.damageReasonService.findAll();
  }

  @Query(() => DamageReason, { name: 'damageReason' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.damageReasonService.findOne(id);
  }

  @Mutation(() => DamageReason)
  updateDamageReason(
    @Args('updateDamageReasonInput')
    updateDamageReasonInput: UpdateDamageReasonInput,
  ) {
    return this.damageReasonService.update(
      updateDamageReasonInput.id,
      updateDamageReasonInput,
    );
  }

  @Mutation(() => DamageReason)
  removeDamageReason(@Args('id', { type: () => Int }) id: number) {
    return this.damageReasonService.remove(id);
  }
}
