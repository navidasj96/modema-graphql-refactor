import { CreateInvoiceAddressInput } from './create-invoice-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceAddressInput extends PartialType(CreateInvoiceAddressInput) {
  @Field(() => Int)
  id: number;
}
