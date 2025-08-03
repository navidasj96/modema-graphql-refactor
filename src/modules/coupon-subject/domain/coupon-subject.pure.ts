import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { CouponPure } from '@/modules/coupon/domain/coupon.pure';
import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CouponSubjectPureDomain')
@ObjectType()
export class CouponSubjectPure {
  @Field(() => ID)
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

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => CouponPure)
  coupon: CouponPure;

  @Field(() => ProductCategoryPure)
  productCategory: ProductCategoryPure;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}
