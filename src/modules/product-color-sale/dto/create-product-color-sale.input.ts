import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductColorSaleInput {
  @Field()
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
