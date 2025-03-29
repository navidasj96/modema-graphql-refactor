import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/domain/basic-carpet-color';
import { Product } from '@/modules/product/domain/product';

@InputType('ProductColorSaleDomain')
@ObjectType()
export class ProductColorSale {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  basicCarpetColorId: number;

  @Field()
  saleCount: number;

  @Field()
  saleCountYear: number;

  @Field()
  averageSaleCount: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetColor)
  basicCarpetColor: BasicCarpetColor;

  @Field(() => Product)
  product: Product;
}
