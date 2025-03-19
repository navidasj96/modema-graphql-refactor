import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';
import { ReturnRequestItem } from '@/modules/return-request-item/domain/return-request-item';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/domain/return-request-return-status';
import { Coupon } from '@/modules/coupon/domain/coupon';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ReturnStatus } from '@/modules/return-status/domain/return-status';
import { ReturnType } from '@/modules/return-type/domain/return-type';
import { User } from '@/modules/user/domain/user';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';

@ObjectType()
export class ReturnRequest {
  @IDField(() => ID)
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

  @Field(() => [ReturnRequestAddress])
  returnRequestAddresses: ReturnRequestAddress[];

  @Field(() => ReturnRequestHistory)
  returnRequestHistories: ReturnRequestHistory;

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @Field(() => [ReturnRequestItem])
  returnRequestItems: ReturnRequestItem[];

  @Field(() => [ReturnRequestReturnStatus])
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @Field(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => ReturnRequest, { nullable: true })
  parent?: ReturnRequest;

  @Field(() => ReturnRequest, { nullable: true })
  returnRequests?: ReturnRequest;

  @Field(() => ReturnStatus)
  returnStatus: ReturnStatus;

  @Field(() => ReturnType)
  returnType: ReturnType;

  @Field(() => User)
  user: User;
}
