import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { City } from '@/modules/city/domain/city';
import { Country } from '@/modules/country/domain/country';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { State } from '@/modules/state/domain/state';
import { User } from '@/modules/user/domain/user';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';

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

  @Field()
  cityId: number;

  @Field({ nullable: true })
  fullname?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  address2?: string;

  @Field({ nullable: true })
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
