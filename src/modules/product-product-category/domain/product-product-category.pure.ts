import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductProductCategoryPureDomain')
@ObjectType()
export class ProductProductCategoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  productCategoryId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductCategoryPure)
  productCategory: ProductCategoryPure;

  @Field(() => ProductPure)
  product: ProductPure;
}
