import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';

@InputType('CreateRelatedProductInput')
export class CreateRelatedProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  relatedProductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;

  @Field(() => Product)
  relatedProduct: Product;
}
