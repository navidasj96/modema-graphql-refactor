import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { DiscountPure } from '@/modules/discount/domain/discount.pure';
import { PriceGroupPure } from '@/modules/price-group/domain/price-group.pure';
import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DiscountSubjectPureDomain')
@ObjectType()
export class DiscountSubjectPure {
  @Field(() => ID)
  id: number;

  @Field()
  discountId: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  priceGroupId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => DiscountPure)
  discount: DiscountPure;

  @Field(() => PriceGroupPure)
  priceGroup: PriceGroupPure;

  @Field(() => ProductCategoryPure)
  productCategory: ProductCategoryPure;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}
