import { CreateInvoiceProductInput } from './create-invoice-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductInput extends PartialType(CreateInvoiceProductInput) {
  @Field(() => Int)
  id: number;
}
