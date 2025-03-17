import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WalletHistoryService } from './wallet-history.service';
import { CreateWalletHistoryInput } from './dto/create-wallet-history.input';
import { UpdateWalletHistoryInput } from './dto/update-wallet-history.input';
import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';

@Resolver(() => WalletHistory)
export class WalletHistoryResolver {
  constructor(private readonly walletHistoryService: WalletHistoryService) {}

  @Mutation(() => WalletHistory)
  createWalletHistory(
    @Args('createWalletHistoryInput')
    createWalletHistoryInput: CreateWalletHistoryInput,
  ) {
    return this.walletHistoryService.create(createWalletHistoryInput);
  }

  @Query(() => [WalletHistory], { name: 'walletHistory' })
  findAll() {
    return this.walletHistoryService.findAll();
  }

  @Query(() => WalletHistory, { name: 'walletHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.walletHistoryService.findOne(id);
  }

  @Mutation(() => WalletHistory)
  updateWalletHistory(
    @Args('updateWalletHistoryInput')
    updateWalletHistoryInput: UpdateWalletHistoryInput,
  ) {
    return this.walletHistoryService.update(
      updateWalletHistoryInput.id,
      updateWalletHistoryInput,
    );
  }

  @Mutation(() => WalletHistory)
  removeWalletHistory(@Args('id', { type: () => Int }) id: number) {
    return this.walletHistoryService.remove(id);
  }
}
