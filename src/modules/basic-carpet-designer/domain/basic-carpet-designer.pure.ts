import { CityPure } from '@/modules/city/domain/city.pure';
import { CountryPure } from '@/modules/country/domain/country.pure';
import { StatePure } from '@/modules/state/domain/state.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('BasicCarpetDesignerPureDomain')
@ObjectType()
export class BasicCarpetDesignerPure {
  @Field(() => ID)
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

  @Field(() => CityPure)
  city: CityPure;

  @Field(() => CountryPure)
  country: CountryPure;

  @Field(() => StatePure)
  state: StatePure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];
}
