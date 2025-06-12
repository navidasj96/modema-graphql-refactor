import { CreateSubproductStockHistoryInput } from './create-subproduct-stock-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubproductStockHistoryInput extends PartialType(
  CreateSubproductStockHistoryInput
) {
  @Field(() => Int)
  id: number;
}
