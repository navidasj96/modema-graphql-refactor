import { CreateBasicCarpetSizeInput } from './create-basic-carpet-size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetSizeInput extends PartialType(CreateBasicCarpetSizeInput) {
  @Field(() => Int)
  id: number;
}
