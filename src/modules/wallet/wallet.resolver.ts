import { Resolver } from '@nestjs/graphql';
import { WalletService } from './wallet.service';
import { Wallet } from '@/modules/wallet/domain/wallet';

@Resolver(() => Wallet)
export class WalletResolver {
  constructor(private readonly walletService: WalletService) {}
}
