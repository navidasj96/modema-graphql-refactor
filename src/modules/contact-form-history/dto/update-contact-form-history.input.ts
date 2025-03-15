import { CreateContactFormHistoryInput } from './create-contact-form-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactFormHistoryInput extends PartialType(CreateContactFormHistoryInput) {
  @Field(() => Int)
  id: number;
}
