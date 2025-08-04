import { ProductCommentLikePure } from '@/modules/product-comment-like/domain/product-comment-like.pure';
import { ProductRatePure } from '@/modules/product-rate/domain/product-rate.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { WalletGiftChargePure } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductCommentPureDomain')
@ObjectType()
export class ProductCommentPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  parentCommentId?: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  approvedBy?: number;

  @Field()
  comment: string;

  @Field()
  approved: boolean;

  @Field()
  starred: boolean;

  @Field({ nullable: true })
  isBuyer?: boolean;

  @Field({ nullable: true })
  recommended?: boolean;

  @Field()
  totalLikes: number;

  @Field()
  totalDislikes: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductCommentLikePure])
  productCommentLikes: ProductCommentLikePure[];

  @Field(() => UserPure, { nullable: true })
  approvedBy2?: UserPure;

  @Field(() => ProductCommentPure, { nullable: true })
  parentComment?: ProductCommentPure;

  @Field(() => [ProductCommentPure])
  productComments: ProductCommentPure[];

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [ProductRatePure])
  productRates: ProductRatePure[];

  @Field(() => WalletGiftChargePure, { nullable: true })
  walletGiftCharges?: WalletGiftChargePure;
}
