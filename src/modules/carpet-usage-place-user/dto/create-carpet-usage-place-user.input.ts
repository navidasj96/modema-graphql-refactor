import { Field, InputType } from '@nestjs/graphql';
import { CarpetUsagePlace } from '@/modules/carpet-usage-place/domain/carpet-usage-place';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateCarpetUsagePlaceUserInput {
  @Field()
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
