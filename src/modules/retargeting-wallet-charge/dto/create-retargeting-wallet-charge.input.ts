import { Field, InputType } from '@nestjs/graphql';

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
}
