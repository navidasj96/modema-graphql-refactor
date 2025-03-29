import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { VisitorGroupRate } from '@/modules/visitor-group-rate/domain/visitor-group-rate';
import { VisitorSale } from '@/modules/visitor-sale/domain/visitor-sale';
import { Visitor } from '@/modules/visitor/domain/visitor';

@InputType('CreateVisitorGroupInput')
export class CreateVisitorGroupInput {
  @Field()
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
