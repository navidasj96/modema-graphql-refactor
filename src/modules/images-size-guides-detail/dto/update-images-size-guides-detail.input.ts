import { CreateImagesSizeGuidesDetailInput } from './create-images-size-guides-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImagesSizeGuidesDetailInput extends PartialType(CreateImagesSizeGuidesDetailInput) {
  @Field(() => Int)
  id: number;
}
