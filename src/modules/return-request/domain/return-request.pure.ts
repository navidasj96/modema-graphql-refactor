import { CouponPure } from '@/modules/coupon/domain/coupon.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ReturnRequestAddressPure } from '@/modules/return-request-address/domain/return-request-address.pure';
import { ReturnRequestHistoryPure } from '@/modules/return-request-history/domain/return-request-history.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestItemPure } from '@/modules/return-request-item/domain/return-request-item.pure';
import { ReturnRequestReturnStatusPure } from '@/modules/return-request-return-status/domain/return-request-return-status.pure';
import { ReturnStatusPure } from '@/modules/return-status/domain/return-status.pure';
import { ReturnTypePure } from '@/modules/return-type/domain/return-type.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnRequestPureDomain')
@ObjectType()
export class ReturnRequestPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  requestDate: string;

  @Field()
  requestNumber: string;

  @Field()
  returnStatusId: number;

  @Field()
  returnTypeId: number;

  @Field({ nullable: true })
  invoiceId?: number;

  @Field({ nullable: true })
  parentId?: number;

  @Field({ nullable: true })
  trackingCodeCustomer?: string;

  @Field({ nullable: true })
  shippingServiceCustomer?: string;

  @Field({ nullable: true })
  trackingCodeModema?: string;

  @Field({ nullable: true })
  shippingServiceModema?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  withdrawable: string;

  @Field()
  userBlocked: string;

  @Field()
  modemaBlocked: string;

  @Field({ nullable: true })
  couponAmount?: string;

  @Field({ nullable: true })
  couponId?: number;

  @Field()
  submittedByFactory: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ReturnRequestAddressPure])
  returnRequestAddresses: ReturnRequestAddressPure[];

  @Field(() => ReturnRequestHistoryPure)
  returnRequestHistories: ReturnRequestHistoryPure;

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];

  @Field(() => [ReturnRequestItemPure])
  returnRequestItems: ReturnRequestItemPure[];

  @Field(() => [ReturnRequestReturnStatusPure])
  returnRequestReturnStatuses: ReturnRequestReturnStatusPure[];

  @Field(() => CouponPure, { nullable: true })
  coupon?: CouponPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => ReturnRequestPure, { nullable: true })
  parent?: ReturnRequestPure;

  @Field(() => ReturnRequestPure, { nullable: true })
  returnRequests?: ReturnRequestPure;

  @Field(() => ReturnStatusPure)
  returnStatus: ReturnStatusPure;

  @Field(() => ReturnTypePure)
  returnType: ReturnTypePure;

  @Field(() => UserPure)
  user: UserPure;
}
