import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { Discount } from '@/modules/discount/domain/discount';
import { PriceGroup } from '@/modules/price-group/domain/price-group';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateDiscountSubjectInput')
export class CreateDiscountSubjectInput {
  @Field()
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

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => Discount)
  discount: Discount;

  @Field(() => PriceGroup)
  priceGroup: PriceGroup;

  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
