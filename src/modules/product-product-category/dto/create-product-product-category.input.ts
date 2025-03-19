import { Field, InputType } from '@nestjs/graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { Product } from '@/modules/product/domain/product';

@InputType()
export class CreateProductProductCategoryInput {
  @Field()
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
