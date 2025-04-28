import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CheckSimilarInvoiceWithNameOutput {
  @Field()
  id: number;

  @Field()
  hasMultipleInvoice: boolean;
}
