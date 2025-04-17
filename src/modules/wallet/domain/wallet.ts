import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';
import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';
import { User } from '@/modules/user/domain/user';

@InputType('WalletDomain')
@ObjectType()
export class Wallet {
  @IDField(() => ID)
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

  @Field(() => [RetargetingWalletCharge])
  retargetingWalletCharges: RetargetingWalletCharge[];

  @Field(() => [WalletGiftCharge])
  walletGiftCharges: WalletGiftCharge[];

  @Field(() => [WalletHistory])
  walletHistories: WalletHistory[];

  @Field(() => User)
  user: User;
}
