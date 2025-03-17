import { CreateSocialGoogleAccountInput } from './create-social-google-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSocialGoogleAccountInput extends PartialType(CreateSocialGoogleAccountInput) {
  @Field(() => Int)
  id: number;
}
