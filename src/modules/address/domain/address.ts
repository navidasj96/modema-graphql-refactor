import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
} from '@ptc-org/nestjs-query-graphql';
import { City } from '@/modules/city/domain/city';
import { Country } from '@/modules/country/domain/country';
import { State } from '@/modules/state/domain/state';
import { User } from '@/modules/user/domain/user';
import { InvoiceAddressValidationResult } from '@/modules/invoice-address-validation-result/domain/invoice-address-validation-result';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/domain/invoice-rates-result';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';

@InputType('AddressDomain')
@FilterableUnPagedRelation('state', () => State)
@FilterableUnPagedRelation('city', () => City)
@ObjectType()
export class Address {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  countryId: number;

  @Field()
  stateId: number;

  @Field()
  cityId: number;

  @FilterableField(() => String, { nullable: true })
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
  city: City;

  @Field()
  country: Country;

  @Field()
  state: State;

  @Field(() => User)
  user: User;

  @Field(() => [InvoiceAddressValidationResult])
  invoiceAddressValidationResults: InvoiceAddressValidationResult[];

  @Field(() => [InvoiceAddress])
  invoiceAddresses: InvoiceAddress[];

  @Field(() => [InvoiceRatesResult])
  invoiceRatesResults: InvoiceRatesResult[];

  @Field(() => [Invoice])
  invoices: Invoice[];

  @Field(() => [ReturnRequestAddress])
  returnRequestAddresses: ReturnRequestAddress[];
}
