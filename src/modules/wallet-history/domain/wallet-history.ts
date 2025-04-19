import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { Transaction } from '@/modules/transaction/domain/transaction';
import { Wallet } from '@/modules/wallet/domain/wallet';

@UnPagedRelation('wallet', () => Wallet)
@UnPagedRelation('transaction', () => Transaction)
@InputType('WalletHistoryDomain')
@ObjectType()
export class WalletHistory {
  @IDField(() => ID)
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

  @Field(() => User)
  createdBy2: User;

  @Field(() => Transaction)
  transaction: Transaction;

  @Field(() => Wallet)
  wallet: Wallet;
}
