import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TmpSpainOrderService } from './tmp-spain-order.service';
import { CreateTmpSpainOrderInput } from './dto/create-tmp-spain-order.input';
import { UpdateTmpSpainOrderInput } from './dto/update-tmp-spain-order.input';
import { TmpSpainOrder } from '@/modules/tmp-spain-order/domain/tmp-spain-order';

@Resolver(() => TmpSpainOrder)
export class TmpSpainOrderResolver {
  constructor(private readonly tmpSpainOrderService: TmpSpainOrderService) {}

  @Mutation(() => TmpSpainOrder)
  createTmpSpainOrder(
    @Args('createTmpSpainOrderInput')
    createTmpSpainOrderInput: CreateTmpSpainOrderInput,
  ) {
    return this.tmpSpainOrderService.create(createTmpSpainOrderInput);
  }

  @Query(() => [TmpSpainOrder], { name: 'tmpSpainOrder' })
  findAll() {
    return this.tmpSpainOrderService.findAll();
  }

  @Query(() => TmpSpainOrder, { name: 'tmpSpainOrder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tmpSpainOrderService.findOne(id);
  }

  @Mutation(() => TmpSpainOrder)
  updateTmpSpainOrder(
    @Args('updateTmpSpainOrderInput')
    updateTmpSpainOrderInput: UpdateTmpSpainOrderInput,
  ) {
    return this.tmpSpainOrderService.update(
      updateTmpSpainOrderInput.id,
      updateTmpSpainOrderInput,
    );
  }

  @Mutation(() => TmpSpainOrder)
  removeTmpSpainOrder(@Args('id', { type: () => Int }) id: number) {
    return this.tmpSpainOrderService.remove(id);
  }
}
