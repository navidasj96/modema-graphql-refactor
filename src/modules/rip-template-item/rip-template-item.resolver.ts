import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RipTemplateItemService } from './rip-template-item.service';
import { CreateRipTemplateItemInput } from './dto/create-rip-template-item.input';
import { UpdateRipTemplateItemInput } from './dto/update-rip-template-item.input';
import { RipTemplateItem } from '@/modules/rip-template-item/domain/rip-template-item';

@Resolver(() => RipTemplateItem)
export class RipTemplateItemResolver {
  constructor(
    private readonly ripTemplateItemService: RipTemplateItemService,
  ) {}

  @Mutation(() => RipTemplateItem)
  createRipTemplateItem(
    @Args('createRipTemplateItemInput')
    createRipTemplateItemInput: CreateRipTemplateItemInput,
  ) {
    return this.ripTemplateItemService.create(createRipTemplateItemInput);
  }

  @Query(() => [RipTemplateItem], { name: 'ripTemplateItem' })
  findAll() {
    return this.ripTemplateItemService.findAll();
  }

  @Query(() => RipTemplateItem, { name: 'ripTemplateItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ripTemplateItemService.findOne(id);
  }

  @Mutation(() => RipTemplateItem)
  updateRipTemplateItem(
    @Args('updateRipTemplateItemInput')
    updateRipTemplateItemInput: UpdateRipTemplateItemInput,
  ) {
    return this.ripTemplateItemService.update(
      updateRipTemplateItemInput.id,
      updateRipTemplateItemInput,
    );
  }

  @Mutation(() => RipTemplateItem)
  removeRipTemplateItem(@Args('id', { type: () => Int }) id: number) {
    return this.ripTemplateItemService.remove(id);
  }
}
