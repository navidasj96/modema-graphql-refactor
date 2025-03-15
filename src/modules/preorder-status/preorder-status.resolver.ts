import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PreorderStatusService } from './preorder-status.service';
import { CreatePreorderStatusInput } from './dto/create-preorder-status.input';
import { UpdatePreorderStatusInput } from './dto/update-preorder-status.input';
import { PreorderStatus } from '@/modules/preorder-status/domain/preorder-status';

@Resolver(() => PreorderStatus)
export class PreorderStatusResolver {
  constructor(private readonly preorderStatusService: PreorderStatusService) {}

  @Mutation(() => PreorderStatus)
  createPreorderStatus(
    @Args('createPreorderStatusInput')
    createPreorderStatusInput: CreatePreorderStatusInput,
  ) {
    return this.preorderStatusService.create(createPreorderStatusInput);
  }

  @Query(() => [PreorderStatus], { name: 'preorderStatus' })
  findAll() {
    return this.preorderStatusService.findAll();
  }

  @Query(() => PreorderStatus, { name: 'preorderStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.preorderStatusService.findOne(id);
  }

  @Mutation(() => PreorderStatus)
  updatePreorderStatus(
    @Args('updatePreorderStatusInput')
    updatePreorderStatusInput: UpdatePreorderStatusInput,
  ) {
    return this.preorderStatusService.update(
      updatePreorderStatusInput.id,
      updatePreorderStatusInput,
    );
  }

  @Mutation(() => PreorderStatus)
  removePreorderStatus(@Args('id', { type: () => Int }) id: number) {
    return this.preorderStatusService.remove(id);
  }
}
