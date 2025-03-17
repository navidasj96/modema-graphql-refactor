import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
}
