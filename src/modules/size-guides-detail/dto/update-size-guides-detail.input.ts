import { CreateSizeGuidesDetailInput } from './create-size-guides-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSizeGuidesDetailInput extends PartialType(
  CreateSizeGuidesDetailInput
) {
  @Field(() => Int)
  id: number;
}
