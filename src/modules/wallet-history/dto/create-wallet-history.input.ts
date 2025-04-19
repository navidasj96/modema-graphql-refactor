import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateWalletHistoryInput')
export class CreateWalletHistoryInput {
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
}
