import { CreateVisitorGroupRateInput } from './create-visitor-group-rate.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorGroupRateInput extends PartialType(
  CreateVisitorGroupRateInput
) {
  @Field(() => Int)
  id: number;
}
