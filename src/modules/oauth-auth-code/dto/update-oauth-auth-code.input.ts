import { CreateOauthAuthCodeInput } from './create-oauth-auth-code.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOauthAuthCodeInput extends PartialType(
  CreateOauthAuthCodeInput
) {
  @Field(() => Int)
  id: string;
}
