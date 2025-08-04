import { ProductCommentPure } from '@/modules/product-comment/domain/product-comment.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { WalletPure } from '@/modules/wallet/domain/wallet.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('WalletGiftChargePureDomain')
@ObjectType()
export class WalletGiftChargePure {
  @Field(() => ID)
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

  @Field(() => ProductCommentPure)
  productComment: ProductCommentPure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => WalletPure)
  wallet: WalletPure;
}
