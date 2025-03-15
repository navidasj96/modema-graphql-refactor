import { CreateInvoiceModeInput } from './create-invoice-mode.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceModeInput extends PartialType(CreateInvoiceModeInput) {
  @Field(() => Int)
  id: number;
}
