import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceShippingRateInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  shippingServiceId: number;

  @Field()
  shippingRate: string;

  @Field({ nullable: true })
  shippingRateCod?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
