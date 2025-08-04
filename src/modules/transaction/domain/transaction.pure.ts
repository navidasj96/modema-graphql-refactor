import { UserPure } from '@/modules/user/domain/user.pure';
import { WalletHistoryPure } from '@/modules/wallet-history/domain/wallet-history.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TransactionPureDomain')
@ObjectType()
export class TransactionPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: number;

  @Field()
  amount: number;

  @Field()
  modemaBlocked: number;

  @Field()
  userBlocked: number;

  @Field()
  withdrawable: number;

  @Field()
  approved: boolean;

  @Field({ nullable: true })
  approvedBy?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  tempInvoiceNumber?: string;

  @Field(() => UserPure, { nullable: true })
  approvedBy2?: UserPure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [WalletHistoryPure])
  walletHistories: WalletHistoryPure[];
}
