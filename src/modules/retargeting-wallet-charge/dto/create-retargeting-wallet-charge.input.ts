import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';
import { Wallet } from '@/modules/wallet/domain/wallet';

@InputType()
export class CreateRetargetingWalletChargeInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  userId: number;

  @Field({ nullable: true })
  walletId?: number;

  @Field()
  amount: string;

  @Field({ nullable: true })
  lastChargedAt?: Date;

  @Field({ nullable: true })
  chargedInvoices?: string;

  @Field(() => User)
  user: User;

  @Field(() => Wallet, { nullable: true })
  wallet?: Wallet;
}
