import { CreateInvoiceReversalItemInput } from './create-invoice-reversal-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceReversalItemInput extends PartialType(CreateInvoiceReversalItemInput) {
  @Field(() => Int)
  id: number;
}
