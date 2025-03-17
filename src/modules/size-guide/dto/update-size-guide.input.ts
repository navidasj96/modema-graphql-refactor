import { CreateSizeGuideInput } from './create-size-guide.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSizeGuideInput extends PartialType(CreateSizeGuideInput) {
  @Field(() => Int)
  id: number;
}
