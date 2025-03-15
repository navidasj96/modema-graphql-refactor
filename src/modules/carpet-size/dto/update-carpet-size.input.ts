import { CreateCarpetSizeInput } from './create-carpet-size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetSizeInput extends PartialType(CreateCarpetSizeInput) {
  @Field(() => Int)
  id: number;
}
