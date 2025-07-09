import { Field, InputType } from '@nestjs/graphql';
import { RipTemplateItemUpdatePairInput } from '@/modules/rip-template-item/dto/update-rip-template-item.input';

@InputType('CreateRipTemplateInput')
@InputType()
export class CreateRipTemplateInput {
  @Field(() => String)
  name: string;

  @Field(() => [RipTemplateItemUpdatePairInput])
  ripTemplateItemUpdate: RipTemplateItemUpdatePairInput[];
}
