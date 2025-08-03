import { CarpetFeaturePure } from '@/modules/carpet-feature/domain/carpet-feature.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetFeatureUserPureDomain')
@ObjectType()
export class CarpetFeatureUserPure {
  @Field(() => ID)
  id: number;

  @Field()
  carpetFeatureId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetFeaturePure)
  carpetFeature: CarpetFeaturePure;

  @Field(() => UserPure)
  user: UserPure;
}
