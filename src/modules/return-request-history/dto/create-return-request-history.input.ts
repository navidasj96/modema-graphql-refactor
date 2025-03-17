import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnRequestHistoryInput {
  @Field()
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
}
