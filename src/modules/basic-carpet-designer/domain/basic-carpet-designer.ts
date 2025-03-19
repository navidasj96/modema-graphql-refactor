import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { City } from '@/modules/city/domain/city';
import { Country } from '@/modules/country/domain/country';
import { State } from '@/modules/state/domain/state';
import { User } from '@/modules/user/domain/user';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@ObjectType()
export class BasicCarpetDesigner {
  @IDField(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true, defaultValue: false })
  selfEmployed?: boolean;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  countryId?: number;

  @Field({ nullable: true })
  stateId?: number;

  @Field({ nullable: true })
  cityId?: number;

  @Field({ nullable: true })
  facebookId?: string;

  @Field({ nullable: true })
  twitterId?: string;

  @Field({ nullable: true })
  linkedinId?: string;

  @Field({ nullable: true })
  instagramId?: string;

  @Field({ nullable: true })
  headerImage?: string;

  @Field({ nullable: true })
  profilePicture?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true, defaultValue: 0 })
  pricePercentage?: number;

  @Field(() => City)
  city: City;

  @Field(() => Country)
  country: Country;

  @Field(() => State)
  state: State;

  @Field(() => User)
  user: User;

  @Field(() => [Subproduct])
  subproducts: Subproduct[];
}
