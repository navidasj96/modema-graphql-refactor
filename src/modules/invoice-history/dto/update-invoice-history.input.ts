import { CreateInvoiceHistoryInput } from './create-invoice-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceHistoryInput extends PartialType(CreateInvoiceHistoryInput) {
  @Field(() => Int)
  id: number;
}
