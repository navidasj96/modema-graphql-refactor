import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('InvoiceAddressValidationResultDomain')
@ObjectType()
export class InvoiceAddressValidationResult {
  @IDField(() => ID)
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

  @Field(() => Address, { nullable: true })
  address?: Address;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;
}
