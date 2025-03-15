import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceProductItemInvoiceProductStatusInput {
  @Field()
  id: number;

  @Field()
  invoiceProductItemId: number;

  @Field()
  invoiceProductStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
