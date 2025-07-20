import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MoveBackInvoiceItemToRipInput {
  @Field(() => Number)
  itemId: number;
}
