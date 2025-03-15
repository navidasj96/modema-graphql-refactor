import { CreateHeardAboutUsOptionInput } from './create-heard-about-us-option.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHeardAboutUsOptionInput extends PartialType(CreateHeardAboutUsOptionInput) {
  @Field(() => Int)
  id: number;
}
