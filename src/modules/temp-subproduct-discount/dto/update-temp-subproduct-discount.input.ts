import { CreateTempSubproductDiscountInput } from './create-temp-subproduct-discount.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTempSubproductDiscountInput extends PartialType(
  CreateTempSubproductDiscountInput
) {
  @Field(() => Int)
  id: number;
}
