import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { Product } from '@/modules/product/domain/product';

@ObjectType()
export class ProductProductCategory {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  productCategoryId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @Field(() => Product)
  product: Product;
}
