import { CreateInvoiceProductHistoryInput } from './create-invoice-product-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductHistoryInput extends PartialType(CreateInvoiceProductHistoryInput) {
  @Field(() => Int)
  id: number;
}
