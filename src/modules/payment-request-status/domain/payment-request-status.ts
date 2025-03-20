import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { PaymentRequest } from '@/modules/payment-request/domain/payment-request';

@InputType('PaymentRequestStatusDomain')
@ObjectType()
export class PaymentRequestStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [PaymentRequest])
  paymentRequests: PaymentRequest[];
}
