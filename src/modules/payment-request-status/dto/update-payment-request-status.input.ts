import { CreatePaymentRequestStatusInput } from './create-payment-request-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePaymentRequestStatusInput extends PartialType(
  CreatePaymentRequestStatusInput
) {
  @Field(() => Int)
  id: number;
}
