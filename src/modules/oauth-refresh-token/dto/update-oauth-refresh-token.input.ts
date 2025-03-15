import { CreateOauthRefreshTokenInput } from './create-oauth-refresh-token.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOauthRefreshTokenInput extends PartialType(
  CreateOauthRefreshTokenInput,
) {
  @Field(() => Int)
  id: string;
}
