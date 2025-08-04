import { TransactionPure } from '@/modules/transaction/domain/transaction.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { WalletPure } from '@/modules/wallet/domain/wallet.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('WalletHistoryPureDomain')
@ObjectType()
export class WalletHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  walletId: number;

  @Field()
  transactionId: number;

  @Field()
  modemaBlocked: number;

  @Field()
  userBlocked: number;

  @Field()
  withdrawable: number;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure)
  createdBy2: UserPure;

  @Field(() => TransactionPure)
  transaction: TransactionPure;

  @Field(() => WalletPure)
  wallet: WalletPure;
}
