import { CreateProductColorSaleInput } from './create-product-color-sale.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductColorSaleInput extends PartialType(
  CreateProductColorSaleInput
) {
  @Field(() => Int)
  id: number;
}
