import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductRate {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  rateId?: number;

  @Field()
  rateValue: number;

  @Field({ nullable: true })
  productCommentId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  oldRate?: number;
}
