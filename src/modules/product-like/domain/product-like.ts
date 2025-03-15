import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductLike {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field()
  isLike: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
