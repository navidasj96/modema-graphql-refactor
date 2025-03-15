import { CreateInvoicePaymentHistoryInput } from './create-invoice-payment-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoicePaymentHistoryInput extends PartialType(CreateInvoicePaymentHistoryInput) {
  @Field(() => Int)
  id: number;
}
