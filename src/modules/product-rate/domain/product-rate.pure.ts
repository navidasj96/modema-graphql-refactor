import { ProductCommentPure } from '@/modules/product-comment/domain/product-comment.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { RatePure } from '@/modules/rate/domain/rate.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductRatePureDomain')
@ObjectType()
export class ProductRatePure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  rateId?: number;

  @Field()
  rateValue: number;

  @Field({ nullable: true })
  productCommentId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  oldRate?: number;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => RatePure, { nullable: true })
  rate?: RatePure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => ProductCommentPure, { nullable: true })
  productComment?: ProductCommentPure;
}
