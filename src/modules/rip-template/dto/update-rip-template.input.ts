import {
  RipTemplateItemUpdatePairInput,
  UpdateRipTemplateItemInput,
} from '@/modules/rip-template-item/dto/update-rip-template-item.input';
import { CreateRipTemplateInput } from './create-rip-template.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRipTemplateInput extends UpdateRipTemplateItemInput {
  @Field(() => String)
  name: string;
}
