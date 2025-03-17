import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class VisitorSale {
  @IDField(() => ID)
  id: number;

  @Field()
  visitorId: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  visitorGroupId: number;

  @Field()
  rate: number;

  @Field({ nullable: true })
  totalSale?: number;

  @Field({ nullable: true })
  totalShare?: number;

  @Field()
  yearSh: number;

  @Field()
  monthSh: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
