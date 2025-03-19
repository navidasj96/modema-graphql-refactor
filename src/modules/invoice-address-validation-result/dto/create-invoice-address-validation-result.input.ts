import { Field, InputType } from '@nestjs/graphql';
import { Address } from '@/modules/address/domain/address';
import { Invoice } from '@/modules/invoice/domain/invoice';

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
  س;
  @Field(() => Address, { nullable: true })
  address?: Address;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;
}
