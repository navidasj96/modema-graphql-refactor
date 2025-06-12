import { CreateInvoiceProductStatusInput } from './create-invoice-product-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductStatusInput extends PartialType(
  CreateInvoiceProductStatusInput
) {
  @Field(() => Int)
  id: number;
}
