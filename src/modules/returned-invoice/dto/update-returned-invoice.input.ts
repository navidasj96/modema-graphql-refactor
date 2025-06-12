import { CreateReturnedInvoiceInput } from './create-returned-invoice.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnedInvoiceInput extends PartialType(
  CreateReturnedInvoiceInput
) {
  @Field(() => Int)
  id: number;
}
