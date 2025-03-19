import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { VisitorGroupRate } from '@/modules/visitor-group-rate/domain/visitor-group-rate';
import { VisitorSale } from '@/modules/visitor-sale/domain/visitor-sale';
import { Visitor } from '@/modules/visitor/domain/visitor';

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

  @Field(() => [Invoice])
  invoices: Invoice[];

  @Field(() => [VisitorGroupRate])
  visitorGroupRates: VisitorGroupRate[];

  @Field(() => [VisitorSale])
  visitorSales: VisitorSale[];

  @Field(() => [Visitor])
  visitors: Visitor[];
}
