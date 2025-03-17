import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class WalletGiftCharge {
  @IDField(() => ID)
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
