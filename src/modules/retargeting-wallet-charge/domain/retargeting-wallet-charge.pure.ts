import { UserPure } from '@/modules/user/domain/user.pure';
import { WalletPure } from '@/modules/wallet/domain/wallet.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('RetargetingWalletChargePureDomain')
@ObjectType()
export class RetargetingWalletChargePure {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => WalletPure, { nullable: true })
  wallet?: WalletPure;
}
