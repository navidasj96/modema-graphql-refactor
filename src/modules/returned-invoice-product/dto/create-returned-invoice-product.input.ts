import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnedInvoiceProductInput {
  @Field()
  id: number;

  @Field()
  returnedInvoiceId: number;

  @Field()
  invoiceProductId: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field()
  count: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
