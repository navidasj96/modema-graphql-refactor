import { CreateInvoiceRatesResultInput } from './create-invoice-rates-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceRatesResultInput extends PartialType(CreateInvoiceRatesResultInput) {
  @Field(() => Int)
  id: number;
}
