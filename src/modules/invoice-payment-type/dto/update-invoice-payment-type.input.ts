import { CreateInvoicePaymentTypeInput } from './create-invoice-payment-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoicePaymentTypeInput extends PartialType(CreateInvoicePaymentTypeInput) {
  @Field(() => Int)
  id: number;
}
