import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDesignersProductPriceRangeInput {
  @Field()
  id: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  minPrice: number;

  @Field()
  maxPrice: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
