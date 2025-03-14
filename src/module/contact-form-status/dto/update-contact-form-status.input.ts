import { CreateContactFormStatusInput } from './create-contact-form-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactFormStatusInput extends PartialType(CreateContactFormStatusInput) {
  @Field(() => Int)
  id: number;
}
