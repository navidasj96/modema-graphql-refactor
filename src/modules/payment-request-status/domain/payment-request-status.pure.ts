import { PaymentRequestPure } from '@/modules/payment-request/domain/payment-request.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PaymentRequestStatusPureDomain')
@ObjectType()
export class PaymentRequestStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [PaymentRequestPure])
  paymentRequests: PaymentRequestPure[];
}
