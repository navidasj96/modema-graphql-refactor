import { CreateHelpDeskInput } from './create-help-desk.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHelpDeskInput extends PartialType(CreateHelpDeskInput) {
  @Field(() => Int)
  id: string;
}
