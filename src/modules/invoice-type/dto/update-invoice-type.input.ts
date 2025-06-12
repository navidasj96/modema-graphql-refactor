import { CreateInvoiceTypeInput } from './create-invoice-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceTypeInput extends PartialType(
  CreateInvoiceTypeInput
) {
  @Field(() => Int)
  id: number;
}
