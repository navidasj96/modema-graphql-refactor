import { Resolver } from '@nestjs/graphql';
import { RetargetingWalletChargeService } from './retargeting-wallet-charge.service';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge';

@Resolver(() => RetargetingWalletCharge)
export class RetargetingWalletChargeResolver {
  constructor(
    private readonly retargetingWalletChargeService: RetargetingWalletChargeService
  ) {}
}
