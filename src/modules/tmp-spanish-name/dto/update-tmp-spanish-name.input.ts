import { CreateTmpSpanishNameInput } from './create-tmp-spanish-name.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTmpSpanishNameInput extends PartialType(
  CreateTmpSpanishNameInput
) {
  @Field(() => Int)
  id: number;
}
