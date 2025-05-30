import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ShowInvoiceInputDto {
  @Field(() => Number)
  invoiceId: number;
}
