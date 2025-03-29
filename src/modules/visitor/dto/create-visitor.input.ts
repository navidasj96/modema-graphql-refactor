import { Field, InputType } from '@nestjs/graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { PaymentRequest } from '@/modules/payment-request/domain/payment-request';
import { VisitorCoupon } from '@/modules/visitor-coupon/domain/visitor-coupon';
import { VisitorSale } from '@/modules/visitor-sale/domain/visitor-sale';
import { User } from '@/modules/user/domain/user';
import { VisitorGroup } from '@/modules/visitor-group/domain/visitor-group';

@InputType('CreateVisitorInput')
export class CreateVisitorInput {
  @Field()
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

  @Field(() => [Invoice])
  invoices: Invoice[];

  @Field(() => [PaymentRequest])
  paymentRequests: PaymentRequest[];

  @Field(() => [VisitorCoupon])
  visitorCoupons: VisitorCoupon[];

  @Field(() => [VisitorSale])
  visitorSales: VisitorSale[];

  @Field(() => User)
  user: User;

  @Field(() => VisitorGroup)
  visitorGroup: VisitorGroup;
}
