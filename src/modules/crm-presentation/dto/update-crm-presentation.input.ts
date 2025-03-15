import { CreateCrmPresentationInput } from './create-crm-presentation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCrmPresentationInput extends PartialType(CreateCrmPresentationInput) {
  @Field(() => Int)
  id: number;
}
