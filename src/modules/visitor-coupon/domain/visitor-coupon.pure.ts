import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { VisitorPure } from '@/modules/visitor/domain/visitor.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VisitorCouponPureDomain')
@ObjectType()
export class VisitorCouponPure {
  @Field(() => ID)
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

  @Field(() => [InvoicePure])
  invoices: InvoicePure[];

  @Field(() => VisitorPure)
  visitor: VisitorPure;
}
