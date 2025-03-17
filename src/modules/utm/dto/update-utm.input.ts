import { CreateUtmInput } from './create-utm.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUtmInput extends PartialType(CreateUtmInput) {
  @Field(() => Int)
  id: number;
}
