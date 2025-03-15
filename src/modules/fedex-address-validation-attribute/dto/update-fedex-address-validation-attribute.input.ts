import { CreateFedexAddressValidationAttributeInput } from './create-fedex-address-validation-attribute.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFedexAddressValidationAttributeInput extends PartialType(CreateFedexAddressValidationAttributeInput) {
  @Field(() => Int)
  id: number;
}
