import { CreateOutOfStockButListedProductInput } from './create-out-of-stock-but-listed-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOutOfStockButListedProductInput extends PartialType(CreateOutOfStockButListedProductInput) {
  @Field(() => Int)
  id: number;
}
