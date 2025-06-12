import { CreateReturnedInvoiceProductInput } from './create-returned-invoice-product.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnedInvoiceProductInput extends PartialType(
  CreateReturnedInvoiceProductInput
) {
  @Field(() => Int)
  id: number;
}
