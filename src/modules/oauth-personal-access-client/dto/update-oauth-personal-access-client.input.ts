import { CreateOauthPersonalAccessClientInput } from './create-oauth-personal-access-client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOauthPersonalAccessClientInput extends PartialType(CreateOauthPersonalAccessClientInput) {
  @Field(() => Int)
  id: number;
}
