import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CarpetUsagePlace } from '@/modules/carpet-usage-place/domain/carpet-usage-place';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class CarpetUsagePlaceUser {
  @IDField(() => ID)
  id: number;

  @Field()
  carpetUsagePlaceId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetUsagePlace)
  carpetUsagePlace: CarpetUsagePlace;

  @Field(() => User)
  user: User;
}
