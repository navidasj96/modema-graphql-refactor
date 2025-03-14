import { CreateBasicCarpetSizeDetailInput } from './create-basic-carpet-size-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetSizeDetailInput extends PartialType(CreateBasicCarpetSizeDetailInput) {
  @Field(() => Int)
  id: number;
}
