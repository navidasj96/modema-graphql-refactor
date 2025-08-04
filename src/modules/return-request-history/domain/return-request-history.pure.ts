import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ReturnRequestItemHistoryPure } from '@/modules/return-request-item-history/domain/return-request-item-history.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { ReturnStatusPure } from '@/modules/return-status/domain/return-status.pure';
import { ReturnTypePure } from '@/modules/return-type/domain/return-type.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('ReturnRequestHistoryPureDomain')
@ObjectType()
export class ReturnRequestHistoryPure {
  @IDField(() => ID)
  id: number;

  @Field()
  editorUserId: number;

  @Field()
  returnRequestId: number;

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

  @Field({ nullable: true })
  withdrawable?: string;

  @Field({ nullable: true })
  userBlocked?: string;

  @Field({ nullable: true })
  modemaBlocked?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure)
  editorUser: UserPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => ReturnRequestPure, { nullable: true })
  parent?: ReturnRequestPure;

  @Field(() => ReturnStatusPure)
  returnStatus: ReturnStatusPure;

  @Field(() => ReturnTypePure)
  returnType: ReturnTypePure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [ReturnRequestItemHistoryPure])
  returnRequestItemHistories: ReturnRequestItemHistoryPure[];
}
