import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { User } from '@/modules/user/domain/user';
import { Wallet } from '@/modules/wallet/domain/wallet';

@InputType('WalletGiftChargeDomain')
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

  @Field(() => ProductComment)
  productComment: ProductComment;

  @Field(() => User)
  user: User;

  @Field(() => Wallet)
  wallet: Wallet;
}
