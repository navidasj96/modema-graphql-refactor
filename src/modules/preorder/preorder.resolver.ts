import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PreorderService } from './preorder.service';
import { CreatePreorderInput } from './dto/create-preorder.input';
import { UpdatePreorderInput } from './dto/update-preorder.input';
import { Preorder } from '@/modules/preorder/domain/preorder';

@Resolver(() => Preorder)
export class PreorderResolver {
  constructor(private readonly preorderService: PreorderService) {}

  @Mutation(() => Preorder)
  createPreorder(
    @Args('createPreorderInput') createPreorderInput: CreatePreorderInput,
  ) {
    return this.preorderService.create(createPreorderInput);
  }

  @Query(() => [Preorder], { name: 'preorder' })
  findAll() {
    return this.preorderService.findAll();
  }

  @Query(() => Preorder, { name: 'preorder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.preorderService.findOne(id);
  }

  @Mutation(() => Preorder)
  updatePreorder(
    @Args('updatePreorderInput') updatePreorderInput: UpdatePreorderInput,
  ) {
    return this.preorderService.update(
      updatePreorderInput.id,
      updatePreorderInput,
    );
  }

  @Mutation(() => Preorder)
  removePreorder(@Args('id', { type: () => Int }) id: number) {
    return this.preorderService.remove(id);
  }
}
