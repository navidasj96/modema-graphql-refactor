import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { ReturnStatus } from '@/modules/return-status/domain/return-status';
import { ReturnType } from '@/modules/return-type/domain/return-type';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/domain/return-request-item-history';

@ObjectType()
export class ReturnRequestHistory {
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

  @Field(() => User)
  editorUser: User;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => ReturnRequest, { nullable: true })
  parent?: ReturnRequest;

  @Field(() => ReturnStatus)
  returnStatus: ReturnStatus;

  @Field(() => ReturnType)
  returnType: ReturnType;

  @Field(() => User)
  user: User;

  @Field(() => [ReturnRequestItemHistory])
  returnRequestItemHistories: ReturnRequestItemHistory[];
}
