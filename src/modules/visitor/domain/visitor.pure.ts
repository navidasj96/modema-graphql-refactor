import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { PaymentRequestPure } from '@/modules/payment-request/domain/payment-request.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { VisitorCouponPure } from '@/modules/visitor-coupon/domain/visitor-coupon.pure';
import { VisitorGroupPure } from '@/modules/visitor-group/domain/visitor-group.pure';
import { VisitorSalePure } from '@/modules/visitor-sale/domain/visitor-sale.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('VisitorPureDomain')
@ObjectType()
export class VisitorPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  visitorGroupId: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  balance?: number;

  @Field({ nullable: true })
  cardNumber?: string;

  @Field()
  isPartner: boolean;

  @Field({ nullable: true })
  partnerCode?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [InvoicePure])
  invoices: InvoicePure[];

  @Field(() => [PaymentRequestPure])
  paymentRequests: PaymentRequestPure[];

  @Field(() => [VisitorCouponPure])
  visitorCoupons: VisitorCouponPure[];

  @Field(() => [VisitorSalePure])
  visitorSales: VisitorSalePure[];

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => VisitorGroupPure)
  visitorGroup: VisitorGroupPure;
}
