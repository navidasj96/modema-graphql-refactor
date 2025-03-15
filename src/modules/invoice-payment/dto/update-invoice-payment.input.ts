import { CreateInvoicePaymentInput } from './create-invoice-payment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoicePaymentInput extends PartialType(CreateInvoicePaymentInput) {
  @Field(() => Int)
  id: number;
}
