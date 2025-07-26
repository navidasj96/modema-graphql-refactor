import { CreateProductionPadRollInput } from './create-production-pad-roll.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionPadRollInput extends PartialType(
  CreateProductionPadRollInput
) {
  @Field(() => Int)
  id: number;
}
