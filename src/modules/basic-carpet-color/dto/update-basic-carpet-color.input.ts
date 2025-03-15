import { CreateBasicCarpetColorInput } from './create-basic-carpet-color.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetColorInput extends PartialType(CreateBasicCarpetColorInput) {
  @Field(() => Int)
  id: number;
}
