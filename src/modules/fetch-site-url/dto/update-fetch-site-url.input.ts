import { CreateFetchSiteUrlInput } from './create-fetch-site-url.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFetchSiteUrlInput extends PartialType(CreateFetchSiteUrlInput) {
  @Field(() => Int)
  id: number;
}
