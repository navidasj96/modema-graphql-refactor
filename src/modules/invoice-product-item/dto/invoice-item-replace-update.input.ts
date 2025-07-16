import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceItemReplaceUpdateInput {
  @Field(() => Number)
  replaceFromId: number;

  @Field(() => Number)
  replaceToId: number;
}
