import { RetargetingWalletChargePure } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { WalletGiftChargePure } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge.pure';
import { WalletHistoryPure } from '@/modules/wallet-history/domain/wallet-history.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('WalletPureDomain')
@ObjectType()
export class WalletPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  modemaBlocked: number;

  @Field()
  userBlocked: number;

  @Field()
  withdrawable: number;

  @Field()
  notUsableForLowTotalPrices: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [RetargetingWalletChargePure])
  retargetingWalletCharges: RetargetingWalletChargePure[];

  @Field(() => [WalletGiftChargePure])
  walletGiftCharges: WalletGiftChargePure[];

  @Field(() => [WalletHistoryPure])
  walletHistories: WalletHistoryPure[];

  @Field(() => UserPure)
  user: UserPure;
}
