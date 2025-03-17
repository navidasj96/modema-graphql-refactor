import { CreateProductionPadProductionPadStatusInput } from './create-production-pad-production-pad-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionPadProductionPadStatusInput extends PartialType(CreateProductionPadProductionPadStatusInput) {
  @Field(() => Int)
  id: number;
}
