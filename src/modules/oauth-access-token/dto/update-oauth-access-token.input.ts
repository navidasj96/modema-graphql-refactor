import { CreateOauthAccessTokenInput } from './create-oauth-access-token.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOauthAccessTokenInput extends PartialType(
  CreateOauthAccessTokenInput
) {
  @Field(() => Int)
  id: string;
}
