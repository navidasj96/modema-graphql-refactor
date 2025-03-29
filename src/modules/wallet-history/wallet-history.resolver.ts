import { Resolver } from '@nestjs/graphql';
import { WalletHistoryService } from './wallet-history.service';
import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';

@Resolver(() => WalletHistory)
export class WalletHistoryResolver {
  constructor(private readonly walletHistoryService: WalletHistoryService) {}
}
