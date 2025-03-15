import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductCategoryRate {
  @IDField(() => ID)
  id: number;

  @Field()
  productCategoryId: number;

  @Field()
  rateId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
