import { Field, InputType } from '@nestjs/graphql';
import { PaymentRequest } from '@/modules/payment-request/domain/payment-request';

@InputType()
export class CreatePaymentRequestStatusInput {
  @Field()
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
