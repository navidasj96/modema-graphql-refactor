import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Product } from '@/modules/product/domain/product';
import { Rate } from '@/modules/rate/domain/rate';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { User } from '@/modules/user/domain/user';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';

@ObjectType()
export class ProductRate {
  @IDField(() => ID)
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

  @Field(() => Product)
  product: Product;

  @Field(() => Rate, { nullable: true })
  rate?: Rate;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => User)
  user: User;

  @Field(() => ProductComment, { nullable: true })
  productComment?: ProductComment;
}
