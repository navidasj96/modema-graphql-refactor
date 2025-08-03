import { AddressPure } from '@/modules/address/domain/address.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceAddressValidationResultPureDomain')
@ObjectType()
export class InvoiceAddressValidationResultPure {
  @Field(() => ID)
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

  @Field(() => AddressPure, { nullable: true })
  address?: AddressPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;
}
