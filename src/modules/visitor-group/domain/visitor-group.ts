import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class VisitorGroup {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  couponDiscountRate: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
