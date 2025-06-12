import { CreateSocialFacebookAccountInput } from './create-social-facebook-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialFacebookAccountInput extends PartialType(
  CreateSocialFacebookAccountInput
) {
  @Field(() => Int)
  id: number;
}
