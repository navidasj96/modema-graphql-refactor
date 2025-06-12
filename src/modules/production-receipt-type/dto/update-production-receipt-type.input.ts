import { CreateProductionReceiptTypeInput } from './create-production-receipt-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionReceiptTypeInput extends PartialType(
  CreateProductionReceiptTypeInput
) {
  @Field(() => Int)
  id: number;
}
