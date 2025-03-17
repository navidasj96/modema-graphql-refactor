import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SenderInformation {
  @IDField(() => ID)
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
}
