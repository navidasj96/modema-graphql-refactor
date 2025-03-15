import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
