import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { WalletService } from './wallet.service';
import { Wallet } from '@/modules/wallet/domain/wallet';
import { CreateWalletInput } from '@/modules/wallet/dto/create-wallet.input';

@Resolver(() => Wallet)
export class WalletResolver {
  constructor(private readonly walletService: WalletService) {}

  @Mutation(() => Boolean)
  createWallet(@Args('createWalletInput') createWalletDto: CreateWalletInput) {
    return this.walletService.create(createWalletDto);
  }
}
