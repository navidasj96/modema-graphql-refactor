import { UpdateRipTemplateItemInput } from '@/modules/rip-template-item/dto/update-rip-template-item.input';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateRipTemplateInput extends UpdateRipTemplateItemInput {
  @Field(() => String)
  name: string;
}
