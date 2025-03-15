import { CreateOauthClientInput } from './create-oauth-client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOauthClientInput extends PartialType(CreateOauthClientInput) {
  @Field(() => Int)
  id: number;
}
