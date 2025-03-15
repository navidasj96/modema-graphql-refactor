import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HyperstarCodeService } from './hyperstar-code.service';
import { CreateHyperstarCodeInput } from './dto/create-hyperstar-code.input';
import { UpdateHyperstarCodeInput } from './dto/update-hyperstar-code.input';
import { HyperstarCode } from './domain/hyperstar-code';

@Resolver(() => HyperstarCode)
export class HyperstarCodeResolver {
  constructor(private readonly hyperstarCodeService: HyperstarCodeService) {}

  @Mutation(() => HyperstarCode)
  createHyperstarCode(
    @Args('createHyperstarCodeInput')
    createHyperstarCodeInput: CreateHyperstarCodeInput,
  ) {
    return this.hyperstarCodeService.create(createHyperstarCodeInput);
  }

  @Query(() => [HyperstarCode], { name: 'hyperstarCode' })
  findAll() {
    return this.hyperstarCodeService.findAll();
  }

  @Query(() => HyperstarCode, { name: 'hyperstarCode' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hyperstarCodeService.findOne(id);
  }

  @Mutation(() => HyperstarCode)
  updateHyperstarCode(
    @Args('updateHyperstarCodeInput')
    updateHyperstarCodeInput: UpdateHyperstarCodeInput,
  ) {
    return this.hyperstarCodeService.update(
      updateHyperstarCodeInput.id,
      updateHyperstarCodeInput,
    );
  }

  @Mutation(() => HyperstarCode)
  removeHyperstarCode(@Args('id', { type: () => Int }) id: number) {
    return this.hyperstarCodeService.remove(id);
  }
}
