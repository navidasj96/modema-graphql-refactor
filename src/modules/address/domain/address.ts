import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
