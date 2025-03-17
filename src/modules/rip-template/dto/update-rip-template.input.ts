import { CreateRipTemplateInput } from './create-rip-template.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRipTemplateInput extends PartialType(CreateRipTemplateInput) {
  @Field(() => Int)
  id: number;
}
