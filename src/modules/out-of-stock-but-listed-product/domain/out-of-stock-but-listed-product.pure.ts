import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('OutOfStockButListedProductPureDomain')
@ObjectType()
export class OutOfStockButListedProductPure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductPure)
  product: ProductPure;
}
