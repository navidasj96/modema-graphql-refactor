import { CreateInvoiceInvoiceStatusInput } from './create-invoice-invoice-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceInvoiceStatusInput extends PartialType(CreateInvoiceInvoiceStatusInput) {
  @Field(() => Int)
  id: number;
}
