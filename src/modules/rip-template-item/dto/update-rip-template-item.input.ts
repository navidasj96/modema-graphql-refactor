import { CreateRipTemplateItemInput } from './create-rip-template-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRipTemplateItemInput extends PartialType(
  CreateRipTemplateItemInput
) {
  @Field(() => Int)
  id: number;
}
