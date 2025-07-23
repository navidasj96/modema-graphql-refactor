import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConfirmTagsPrintedInput {
  @Field(() => [Number])
  invoiceProductItemIds: number[];
}
