import { CreateDesignersProductPriceRangeInput } from './create-designers-product-price-range.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDesignersProductPriceRangeInput extends PartialType(CreateDesignersProductPriceRangeInput) {
  @Field(() => Int)
  id: number;
}
