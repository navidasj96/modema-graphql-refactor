import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceRatesResultInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  addressId: number;

  @Field({ nullable: true })
  shippingServiceId?: number;

  @Field({ nullable: true })
  ratesReplyResult?: string;

  @Field({ nullable: true })
  ratesReplyCodResult?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
