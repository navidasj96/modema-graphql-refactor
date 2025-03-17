import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class VisitorGroupRate {
  @IDField(() => ID)
  id: number;

  @Field()
  visitorGroupId: number;

  @Field()
  minRevenue: number;

  @Field()
  maxRevenue: number;

  @Field()
  rate: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
