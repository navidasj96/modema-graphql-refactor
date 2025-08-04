import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { VisitorGroupRatePure } from '@/modules/visitor-group-rate/domain/visitor-group-rate.pure';
import { VisitorSalePure } from '@/modules/visitor-sale/domain/visitor-sale.pure';
import { VisitorPure } from '@/modules/visitor/domain/visitor.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VisitorGroupPureDomain')
@ObjectType()
export class VisitorGroupPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  couponDiscountRate: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [InvoicePure])
  invoices: InvoicePure[];

  @Field(() => [VisitorGroupRatePure])
  visitorGroupRates: VisitorGroupRatePure[];

  @Field(() => [VisitorSalePure])
  visitorSales: VisitorSalePure[];

  @Field(() => [VisitorPure])
  visitors: VisitorPure[];
}
