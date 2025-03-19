import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';

@InputType()
export class CreateTransactionInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: number;

  @Field()
  amount: string;

  @Field()
  modemaBlocked: string;

  @Field()
  userBlocked: string;

  @Field()
  withdrawable: string;

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

  @Field(() => User, { nullable: true })
  approvedBy2?: User;

  @Field(() => User)
  user: User;

  @Field(() => [WalletHistory])
  walletHistories: WalletHistory[];
}
