import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class DesignersProductPriceRange {
  @IDField(() => ID)
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
