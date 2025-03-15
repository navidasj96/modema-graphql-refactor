import { CreateInvoicePaymentStatusInput } from './create-invoice-payment-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoicePaymentStatusInput extends PartialType(CreateInvoicePaymentStatusInput) {
  @Field(() => Int)
  id: number;
}
