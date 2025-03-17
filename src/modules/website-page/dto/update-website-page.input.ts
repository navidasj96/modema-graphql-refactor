import { CreateWebsitePageInput } from './create-website-page.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWebsitePageInput extends PartialType(CreateWebsitePageInput) {
  @Field(() => Int)
  id: number;
}
