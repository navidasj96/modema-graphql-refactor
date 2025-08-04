import { AddressPure } from '@/modules/address/domain/address.pure';
import { CityPure } from '@/modules/city/domain/city.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { StatePure } from '@/modules/state/domain/state.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ReturnRequestAddressPureDomain')
@ObjectType()
export class ReturnRequestAddressPure {
  @Field(() => ID)
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

  @Field(() => AddressPure)
  address_2: AddressPure;

  @Field(() => CityPure)
  city: CityPure;

  @Field(() => CountryPure)
  country: CountryPure;

  @Field(() => ReturnRequestPure)
  returnRequest: ReturnRequestPure;

  @Field(() => StatePure)
  state: StatePure;

  @Field(() => UserPure)
  user: UserPure;
}
