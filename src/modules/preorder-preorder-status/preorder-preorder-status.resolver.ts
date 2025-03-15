import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PreorderPreorderStatusService } from './preorder-preorder-status.service';
import { CreatePreorderPreorderStatusInput } from './dto/create-preorder-preorder-status.input';
import { UpdatePreorderPreorderStatusInput } from './dto/update-preorder-preorder-status.input';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status';

@Resolver(() => PreorderPreorderStatus)
export class PreorderPreorderStatusResolver {
  constructor(
    private readonly preorderPreorderStatusService: PreorderPreorderStatusService,
  ) {}

  @Mutation(() => PreorderPreorderStatus)
  createPreorderPreorderStatus(
    @Args('createPreorderPreorderStatusInput')
    createPreorderPreorderStatusInput: CreatePreorderPreorderStatusInput,
  ) {
    return this.preorderPreorderStatusService.create(
      createPreorderPreorderStatusInput,
    );
  }

  @Query(() => [PreorderPreorderStatus], { name: 'preorderPreorderStatus' })
  findAll() {
    return this.preorderPreorderStatusService.findAll();
  }

  @Query(() => PreorderPreorderStatus, { name: 'preorderPreorderStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.preorderPreorderStatusService.findOne(id);
  }

  @Mutation(() => PreorderPreorderStatus)
  updatePreorderPreorderStatus(
    @Args('updatePreorderPreorderStatusInput')
    updatePreorderPreorderStatusInput: UpdatePreorderPreorderStatusInput,
  ) {
    return this.preorderPreorderStatusService.update(
      updatePreorderPreorderStatusInput.id,
      updatePreorderPreorderStatusInput,
    );
  }

  @Mutation(() => PreorderPreorderStatus)
  removePreorderPreorderStatus(@Args('id', { type: () => Int }) id: number) {
    return this.preorderPreorderStatusService.remove(id);
  }
}
