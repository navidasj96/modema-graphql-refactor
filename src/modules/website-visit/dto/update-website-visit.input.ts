import { CreateWebsiteVisitInput } from './create-website-visit.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWebsiteVisitInput extends PartialType(
  CreateWebsiteVisitInput
) {
  @Field(() => Int)
  id: number;
}
