import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
} from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { City } from '@/modules/city/domain/city';
import { Country } from '@/modules/country/domain/country';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { State } from '@/modules/state/domain/state';
import { User } from '@/modules/user/domain/user';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';

@InputType('InvoiceAddressDomain')
@FilterableUnPagedRelation('city', () => City)
@FilterableUnPagedRelation('state', () => State)
@FilterableUnPagedRelation('user', () => User)
@ObjectType()
export class InvoiceAddress {
  @IDField(() => ID)
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

  @Field(() => Address, { nullable: true })
  address_2?: Address;

  @Field(() => City, { nullable: true })
  city?: City;

  @Field(() => Country, { nullable: true })
  country?: Country;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => State, { nullable: true })
  state?: State;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [InvoiceHistory], { nullable: true })
  invoiceHistories?: InvoiceHistory[];
}
