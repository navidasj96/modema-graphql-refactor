import { Field, InputType } from '@nestjs/graphql';
import { ProductCommentLike } from '@/modules/product-comment-like/domain/product-comment-like';
import { User } from '@/modules/user/domain/user';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';

@InputType()
export class CreateProductCommentInput {
  @Field()
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

  @Field(() => [ProductCommentLike])
  productCommentLikes: ProductCommentLike[];

  @Field(() => User, { nullable: true })
  approvedBy2?: User;

  @Field(() => ProductComment, { nullable: true })
  parentComment?: ProductComment;

  @Field(() => [ProductComment])
  productComments: ProductComment[];

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => User)
  user: User;

  @Field(() => [ProductRate])
  productRates: ProductRate[];

  @Field(() => WalletGiftCharge, { nullable: true })
  walletGiftCharges?: WalletGiftCharge;
}
