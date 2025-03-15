import { CreateInvoiceProductItemInvoiceProductStatusInput } from './create-invoice-product-item-invoice-product-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductItemInvoiceProductStatusInput extends PartialType(CreateInvoiceProductItemInvoiceProductStatusInput) {
  @Field(() => Int)
  id: number;
}
