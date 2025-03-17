import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RetargetingWalletChargeService } from './retargeting-wallet-charge.service';
import { CreateRetargetingWalletChargeInput } from './dto/create-retargeting-wallet-charge.input';
import { UpdateRetargetingWalletChargeInput } from './dto/update-retargeting-wallet-charge.input';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge';

@Resolver(() => RetargetingWalletCharge)
export class RetargetingWalletChargeResolver {
  constructor(
    private readonly retargetingWalletChargeService: RetargetingWalletChargeService,
  ) {}

  @Mutation(() => RetargetingWalletCharge)
  createRetargetingWalletCharge(
    @Args('createRetargetingWalletChargeInput')
    createRetargetingWalletChargeInput: CreateRetargetingWalletChargeInput,
  ) {
    return this.retargetingWalletChargeService.create(
      createRetargetingWalletChargeInput,
    );
  }

  @Query(() => [RetargetingWalletCharge], { name: 'retargetingWalletCharge' })
  findAll() {
    return this.retargetingWalletChargeService.findAll();
  }

  @Query(() => RetargetingWalletCharge, { name: 'retargetingWalletCharge' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.retargetingWalletChargeService.findOne(id);
  }

  @Mutation(() => RetargetingWalletCharge)
  updateRetargetingWalletCharge(
    @Args('updateRetargetingWalletChargeInput')
    updateRetargetingWalletChargeInput: UpdateRetargetingWalletChargeInput,
  ) {
    return this.retargetingWalletChargeService.update(
      updateRetargetingWalletChargeInput.id,
      updateRetargetingWalletChargeInput,
    );
  }

  @Mutation(() => RetargetingWalletCharge)
  removeRetargetingWalletCharge(@Args('id', { type: () => Int }) id: number) {
    return this.retargetingWalletChargeService.remove(id);
  }
}
