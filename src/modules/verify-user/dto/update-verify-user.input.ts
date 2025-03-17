import { CreateVerifyUserInput } from './create-verify-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVerifyUserInput extends PartialType(CreateVerifyUserInput) {
  @Field(() => Int)
  id: number;
}
