import { CreatePasswordResetInput } from './create-password-reset.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePasswordResetInput extends PartialType(
  CreatePasswordResetInput
) {
  @Field(() => Int)
  id: number;
}
