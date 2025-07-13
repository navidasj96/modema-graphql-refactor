import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductItemRipToPrintInput {
  @Field(() => Number)
  printRipId: number;

  @Field(() => [Number])
  completeArr: number[];
}
