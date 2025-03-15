import { CreateInvoiceStatusInput } from './create-invoice-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceStatusInput extends PartialType(CreateInvoiceStatusInput) {
  @Field(() => Int)
  id: number;
}
