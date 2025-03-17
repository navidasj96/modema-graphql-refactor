import { CreateProductionPadStatusInput } from './create-production-pad-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionPadStatusInput extends PartialType(CreateProductionPadStatusInput) {
  @Field(() => Int)
  id: number;
}
