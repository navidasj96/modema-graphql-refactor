import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CancelDepotInvoiceItemInput {
  @Field(() => Number)
  invoiceProductItemId: number;
}
