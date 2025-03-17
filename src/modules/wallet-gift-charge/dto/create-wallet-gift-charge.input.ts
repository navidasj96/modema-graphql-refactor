import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWalletGiftChargeInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  walletId: number;

  @Field()
  productCommentId: number;

  @Field()
  amount: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
