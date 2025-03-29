import { Resolver } from '@nestjs/graphql';
import { WalletGiftChargeService } from './wallet-gift-charge.service';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';

@Resolver(() => WalletGiftCharge)
export class WalletGiftChargeResolver {
  constructor(
    private readonly walletGiftChargeService: WalletGiftChargeService,
  ) {}
}
