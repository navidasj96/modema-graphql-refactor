import { CreateInvoiceShippingRateInput } from './create-invoice-shipping-rate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceShippingRateInput extends PartialType(CreateInvoiceShippingRateInput) {
  @Field(() => Int)
  id: number;
}
