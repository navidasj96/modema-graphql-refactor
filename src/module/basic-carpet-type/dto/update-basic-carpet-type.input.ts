import { CreateBasicCarpetTypeInput } from './create-basic-carpet-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetTypeInput extends PartialType(CreateBasicCarpetTypeInput) {
  @Field(() => Int)
  id: number;
}
