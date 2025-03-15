import { CreateInvoiceNegotiationInput } from './create-invoice-negotiation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceNegotiationInput extends PartialType(CreateInvoiceNegotiationInput) {
  @Field(() => Int)
  id: number;
}
