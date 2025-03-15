import { CreateInvoiceAddressValidationResultInput } from './create-invoice-address-validation-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceAddressValidationResultInput extends PartialType(CreateInvoiceAddressValidationResultInput) {
  @Field(() => Int)
  id: number;
}
