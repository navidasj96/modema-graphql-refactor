import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceNegotiationInput {
  @Field()
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  invoiceId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
