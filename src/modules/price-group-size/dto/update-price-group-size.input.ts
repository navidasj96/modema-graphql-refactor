import { CreatePriceGroupSizeInput } from './create-price-group-size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePriceGroupSizeInput extends PartialType(
  CreatePriceGroupSizeInput
) {
  @Field(() => Int)
  id: number;
}
