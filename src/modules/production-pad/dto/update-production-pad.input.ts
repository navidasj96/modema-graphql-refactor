import { CreateProductionPadInput } from './create-production-pad.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionPadInput extends PartialType(
  CreateProductionPadInput
) {
  @Field(() => Int)
  id: number;
}
