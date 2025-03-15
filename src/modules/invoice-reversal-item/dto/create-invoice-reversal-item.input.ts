import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceReversalItemInput {
  @Field()
  id: number;

  @Field()
  invoiceReversalId: number;

  @Field()
  invoiceProductId: number;

  @Field()
  withPad: boolean;

  @Field()
  count: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
