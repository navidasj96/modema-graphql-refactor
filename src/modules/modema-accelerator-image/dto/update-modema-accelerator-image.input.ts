import { CreateModemaAcceleratorImageInput } from './create-modema-accelerator-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModemaAcceleratorImageInput extends PartialType(
  CreateModemaAcceleratorImageInput
) {
  @Field(() => Int)
  id: number;
}
