import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { CityPure } from '@/modules/city/domain/city.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { StatePure } from '@/modules/state/domain/state.pure';

@InputType('SenderInformationPureDomain')
@ObjectType()
export class SenderInformationPure {
  @Field(() => ID)
  id: number;

  @Field()
  contactId: number;

  @Field()
  personName: string;

  @Field()
  title: string;

  @Field()
  companyName: string;

  @Field()
  phoneNumber: string;

  @Field()
  phoneExtension: string;

  @Field()
  pagerNumber: string;

  @Field()
  faxNumber: string;

  @Field()
  emailAddress: string;

  @Field()
  streetLines: string;

  @Field({ nullable: true })
  cityId?: number;

  @Field({ nullable: true })
  stateId?: number;

  @Field()
  postalCode: string;

  @Field({ nullable: true })
  countryId?: number;

  @Field()
  packageLocation: string;

  @Field()
  buildingPart: string;

  @Field()
  buildingPartDescription: string;

  @Field()
  location: string;

  @Field()
  remarks: string;

  @Field()
  commodityDescription: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CityPure, { nullable: true })
  city?: CityPure;

  @Field(() => CountryPure, { nullable: true })
  country?: CountryPure;

  @Field(() => StatePure, { nullable: true })
  state?: StatePure;
}
