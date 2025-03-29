import { Field, InputType } from '@nestjs/graphql';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';
import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';
import { User } from '@/modules/user/domain/user';

@InputType('CreateWalletInputs')
export class CreateWalletInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  modemaBlocked: string;

  @Field()
  userBlocked: string;

  @Field()
  withdrawable: string;

  @Field()
  notUsableForLowTotalPrices: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [RetargetingWalletCharge])
  retargetingWalletCharges: RetargetingWalletCharge[];

  @Field(() => [WalletGiftCharge])
  walletGiftCharges: WalletGiftCharge[];

  @Field(() => [WalletHistory])
  walletHistories: WalletHistory[];

  @Field(() => User)
  user: User;
}
