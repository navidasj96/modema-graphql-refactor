import { CarpetUsagePlacePure } from '@/modules/carpet-usage-place/domain/carpet-usage-place.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetUsagePlaceUserPureDomain')
@ObjectType()
export class CarpetUsagePlaceUserPure {
  @Field(() => ID)
  id: number;

  @Field()
  carpetUsagePlaceId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetUsagePlacePure)
  carpetUsagePlace: CarpetUsagePlacePure;

  @Field(() => UserPure)
  user: UserPure;
}
