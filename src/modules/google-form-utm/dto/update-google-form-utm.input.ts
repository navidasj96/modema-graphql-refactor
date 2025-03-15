import { CreateGoogleFormUtmInput } from './create-google-form-utm.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGoogleFormUtmInput extends PartialType(CreateGoogleFormUtmInput) {
  @Field(() => Int)
  id: number;
}
