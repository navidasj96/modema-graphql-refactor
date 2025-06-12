import { CreateModemaAcceleratorInput } from './create-modema-accelerator.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModemaAcceleratorInput extends PartialType(
  CreateModemaAcceleratorInput
) {
  @Field(() => Int)
  id: number;
}
