import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { CityPure } from '@/modules/city/domain/city.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { InvoiceAddressValidationResultPure } from '@/modules/invoice-address-validation-result/domain/invoice-address-validation-result.pure';
import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { InvoiceRatesResultPure } from '@/modules/invoice-rates-result/domain/invoice-rates-result.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ReturnRequestAddressPure } from '@/modules/return-request-address/domain/return-request-address.pure';
import { StatePure } from '@/modules/state/domain/state.pure';
import { UserPure } from '@/modules/user/domain/user.pure';

@InputType('AddressPureDomain')
@ObjectType()
export class AddressPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  countryId: number;

  @Field()
  stateId: number;

  @Field()
  cityId: number;

  @Field(() => String, { nullable: true })
  fullname: string | null;

  @Field(() => String, { nullable: true })
  zipCode: string | null;

  @Field()
  address: string;

  @Field(() => String, { nullable: true })
  address2: string | null;

  @Field(() => String, { nullable: true })
  phone: string | null;

  @Field(() => String, { nullable: true })
  phone2: string | null;

  @Field(() => String, { nullable: true })
  longitude: string | null;

  @Field(() => String, { nullable: true })
  latitude: string | null;

  @Field(() => String, { nullable: true })
  email: string | null;

  @Field(() => String, { nullable: true })
  fullAddress: string | null;

  @Field({ nullable: true })
  nationalId?: string;

  @Field({ nullable: true })
  crmCompanyId?: string;

  @Field({ nullable: true })
  crmCompanyPersonId?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field()
  oldAddress: string;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  fullnameTrimmed?: string;

  @Field({ nullable: true })
  fullnameDescription?: string;

  @Field()
  city: CityPure;

  @Field()
  country: CountryPure;

  @Field()
  state: StatePure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [InvoiceAddressValidationResultPure])
  invoiceAddressValidationResults: InvoiceAddressValidationResultPure[];

  @Field(() => [InvoiceAddressPure])
  invoiceAddresses: InvoiceAddressPure[];

  @Field(() => [InvoiceRatesResultPure])
  invoiceRatesResults: InvoiceRatesResultPure[];

  @Field(() => [InvoicePure])
  invoices: InvoicePure[];

  @Field(() => [ReturnRequestAddressPure])
  returnRequestAddresses: ReturnRequestAddressPure[];
}
