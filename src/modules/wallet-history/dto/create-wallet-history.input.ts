import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { Transaction } from '@/modules/transaction/domain/transaction';
import { Wallet } from '@/modules/wallet/domain/wallet';

@InputType('CreateWalletHistoryInput')
export class CreateWalletHistoryInput {
  @Field()
  id: number;

  @Field()
  walletId: number;

  @Field()
  transactionId: number;

  @Field()
  modemaBlocked: string;

  @Field()
  userBlocked: string;

  @Field()
  withdrawable: string;

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
