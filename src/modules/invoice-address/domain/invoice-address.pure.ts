import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { AddressPure } from '@/modules/address/domain/address.pure';
import { CityPure } from '@/modules/city/domain/city.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { InvoiceHistoryPure } from '@/modules/invoice-history/domain/invoice-history.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { StatePure } from '@/modules/state/domain/state.pure';
import { UserPure } from '@/modules/user/domain/user.pure';

@InputType('InvoiceAddressPureDomain')
@ObjectType()
export class InvoiceAddressPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  addressId: number;

  @Field()
  userId: number;

  @Field()
  countryId: number;

  @Field()
  stateId: number;

  @FilterableField()
  cityId: number;

  @FilterableField({ nullable: true })
  fullname?: string;

  @FilterableField({ nullable: true })
  zipCode?: string;

  @FilterableField()
  address: string;

  @FilterableField({ nullable: true })
  address2?: string;

  @FilterableField({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  phone2?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  fullAddress?: string;

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

  @Field(() => AddressPure, { nullable: true })
  address_2?: AddressPure;

  @Field(() => CityPure, { nullable: true })
  city?: CityPure;

  @Field(() => CountryPure, { nullable: true })
  country?: CountryPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => StatePure, { nullable: true })
  state?: StatePure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;

  @Field(() => [InvoiceHistoryPure], { nullable: true })
  invoiceHistories?: InvoiceHistoryPure[];
}
