import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class RelatedProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  relatedProductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
