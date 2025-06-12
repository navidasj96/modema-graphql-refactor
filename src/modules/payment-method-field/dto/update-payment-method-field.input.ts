import { CreatePaymentMethodFieldInput } from './create-payment-method-field.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePaymentMethodFieldInput extends PartialType(
  CreatePaymentMethodFieldInput
) {
  @Field(() => Int)
  id: number;
}
