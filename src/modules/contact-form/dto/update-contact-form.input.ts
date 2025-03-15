import { CreateContactFormInput } from './create-contact-form.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactFormInput extends PartialType(CreateContactFormInput) {
  @Field(() => Int)
  id: number;
}
