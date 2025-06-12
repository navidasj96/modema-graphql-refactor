import { CreateModemaAcceleratorVideoInput } from './create-modema-accelerator-video.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModemaAcceleratorVideoInput extends PartialType(
  CreateModemaAcceleratorVideoInput
) {
  @Field(() => Int)
  id: number;
}
