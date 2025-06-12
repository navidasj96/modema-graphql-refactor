import { CreateMellatPaymentErrorInput } from './create-mellat-payment-error.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMellatPaymentErrorInput extends PartialType(
  CreateMellatPaymentErrorInput
) {
  @Field(() => Int)
  id: string;
}
