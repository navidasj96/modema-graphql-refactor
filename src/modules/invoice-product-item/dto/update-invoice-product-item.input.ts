import { CreateInvoiceProductItemInput } from './create-invoice-product-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductItemInput extends PartialType(CreateInvoiceProductItemInput) {
  @Field(() => Int)
  id: number;
}
