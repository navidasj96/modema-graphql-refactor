import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceAddressValidationResultInput {
  @Field()
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  addressId: number;

  @Field()
  addressValidationResult: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
