import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WalletGiftChargeService } from './wallet-gift-charge.service';
import { CreateWalletGiftChargeInput } from './dto/create-wallet-gift-charge.input';
import { UpdateWalletGiftChargeInput } from './dto/update-wallet-gift-charge.input';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';

@Resolver(() => WalletGiftCharge)
export class WalletGiftChargeResolver {
  constructor(
    private readonly walletGiftChargeService: WalletGiftChargeService,
  ) {}

  @Mutation(() => WalletGiftCharge)
  createWalletGiftCharge(
    @Args('createWalletGiftChargeInput')
    createWalletGiftChargeInput: CreateWalletGiftChargeInput,
  ) {
    return this.walletGiftChargeService.create(createWalletGiftChargeInput);
  }

  @Query(() => [WalletGiftCharge], { name: 'walletGiftCharge' })
  findAll() {
    return this.walletGiftChargeService.findAll();
  }

  @Query(() => WalletGiftCharge, { name: 'walletGiftCharge' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.walletGiftChargeService.findOne(id);
  }

  @Mutation(() => WalletGiftCharge)
  updateWalletGiftCharge(
    @Args('updateWalletGiftChargeInput')
    updateWalletGiftChargeInput: UpdateWalletGiftChargeInput,
  ) {
    return this.walletGiftChargeService.update(
      updateWalletGiftChargeInput.id,
      updateWalletGiftChargeInput,
    );
  }

  @Mutation(() => WalletGiftCharge)
  removeWalletGiftCharge(@Args('id', { type: () => Int }) id: number) {
    return this.walletGiftChargeService.remove(id);
  }
}
