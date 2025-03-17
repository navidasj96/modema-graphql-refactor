import { CreateSubcolorInput } from './create-subcolor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubcolorInput extends PartialType(CreateSubcolorInput) {
  @Field(() => Int)
  id: number;
}
