import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { Coupon } from '@/modules/coupon/domain/coupon';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateCouponSubjectInput {
  @Field()
  id: number;

  @Field()
  couponId: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => Coupon)
  coupon: Coupon;

  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
