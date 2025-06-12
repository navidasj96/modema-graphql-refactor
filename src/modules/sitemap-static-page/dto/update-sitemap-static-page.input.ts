import { CreateSitemapStaticPageInput } from './create-sitemap-static-page.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSitemapStaticPageInput extends PartialType(
  CreateSitemapStaticPageInput
) {
  @Field(() => Int)
  id: number;
}
