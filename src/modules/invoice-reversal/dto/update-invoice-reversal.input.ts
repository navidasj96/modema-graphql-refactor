import { CreateInvoiceReversalInput } from './create-invoice-reversal.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceReversalInput extends PartialType(
  CreateInvoiceReversalInput
) {
  @Field(() => Int)
  id: number;
}
