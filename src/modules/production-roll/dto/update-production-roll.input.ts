import { CreateProductionRollInput } from './create-production-roll.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionRollInput extends PartialType(
  CreateProductionRollInput
) {
  @Field(() => Int)
  id: number;
}
