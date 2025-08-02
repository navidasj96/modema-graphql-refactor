import { CreateProductionReceiptInput } from './create-production-receipt.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductionReceiptInput extends PartialType(
  CreateProductionReceiptInput
) {
  @Field(() => Int)
  id: number;
}
