import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchInvoiceProductItemForReplacementListInput {
  @Field(() => String, { nullable: true })
  search: string | null;
}
