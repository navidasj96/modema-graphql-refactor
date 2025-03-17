import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
