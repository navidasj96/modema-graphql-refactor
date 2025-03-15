import { CreateCarpetShapeInput } from './create-carpet-shape.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetShapeInput extends PartialType(CreateCarpetShapeInput) {
  @Field(() => Int)
  id: number;
}
