import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class VisitorCoupon {
  @IDField(() => ID)
  id: number;

  @Field()
  visitorId: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
