import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WalletService } from './wallet.service';
import { CreateWalletInput } from './dto/create-wallet.input';
import { UpdateWalletInput } from './dto/update-wallet.input';
import { Wallet } from '@/modules/wallet/domain/wallet';

@Resolver(() => Wallet)
export class WalletResolver {
  constructor(private readonly walletService: WalletService) {}

  @Mutation(() => Wallet)
  createWallet(
    @Args('createWalletInput') createWalletInput: CreateWalletInput,
  ) {
    return this.walletService.create(createWalletInput);
  }

  @Query(() => [Wallet], { name: 'wallet' })
  findAll() {
    return this.walletService.findAll();
  }

  @Query(() => Wallet, { name: 'wallet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.walletService.findOne(id);
  }

  @Mutation(() => Wallet)
  updateWallet(
    @Args('updateWalletInput') updateWalletInput: UpdateWalletInput,
  ) {
    return this.walletService.update(updateWalletInput.id, updateWalletInput);
  }

  @Mutation(() => Wallet)
  removeWallet(@Args('id', { type: () => Int }) id: number) {
    return this.walletService.remove(id);
  }
}
