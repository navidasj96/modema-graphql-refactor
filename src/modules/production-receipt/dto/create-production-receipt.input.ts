import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductionReceiptInput {
  @Field(() => Number)
  productionRollId: number;

  @Field(() => String)
  receiptNumber: string;

  @Field(() => String)
  receiptDate: string;

  @Field(() => Number)
  productionReceiptTypeId: number;

  @Field(() => Number)
  count: number;

  @Field(() => Number)
  weight: number;
}
