import { Field, InputType } from '@nestjs/graphql';
import { Address } from '@/modules/address/domain/address';
import { City } from '@/modules/city/domain/city';
import { Country } from '@/modules/country/domain/country';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { State } from '@/modules/state/domain/state';
import { User } from '@/modules/user/domain/user';

@InputType('CreateReturnRequestAddressInput')
export class CreateReturnRequestAddressInput {
  @Field()
  id: number;

  @Field()
  returnRequestId: number;

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
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Address)
  address_2: Address;

  @Field(() => City)
  city: City;

  @Field(() => Country)
  country: Country;

  @Field(() => ReturnRequest)
  returnRequest: ReturnRequest;

  @Field(() => State)
  state: State;

  @Field(() => User)
  user: User;
}
