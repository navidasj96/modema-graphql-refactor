import { CreatePaymentRequestInput } from './create-payment-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePaymentRequestInput extends PartialType(
  CreatePaymentRequestInput
) {
  @Field(() => Int)
  id: number;
}
