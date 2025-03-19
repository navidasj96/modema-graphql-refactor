import { Field, InputType } from '@nestjs/graphql';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { User } from '@/modules/user/domain/user';
import { Wallet } from '@/modules/wallet/domain/wallet';

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

  @Field(() => ProductComment)
  productComment: ProductComment;

  @Field(() => User)
  user: User;

  @Field(() => Wallet)
  wallet: Wallet;
}
