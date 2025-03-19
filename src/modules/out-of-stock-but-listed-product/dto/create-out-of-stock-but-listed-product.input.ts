import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';

@InputType()
export class CreateOutOfStockButListedProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;
}
