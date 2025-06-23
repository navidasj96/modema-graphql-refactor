import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductItemsRollIdInput {
  @Field(() => [Number])
  ids: number[];
  @Field(() => Number)
  productionRollId: number;
}
