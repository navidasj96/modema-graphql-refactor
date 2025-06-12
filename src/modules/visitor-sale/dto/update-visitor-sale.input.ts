import { CreateVisitorSaleInput } from './create-visitor-sale.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorSaleInput extends PartialType(
  CreateVisitorSaleInput
) {
  @Field(() => Int)
  id: number;
}
