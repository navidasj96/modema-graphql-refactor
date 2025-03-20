import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CarpetFeature } from '@/modules/carpet-feature/domain/carpet-feature';
import { User } from '@/modules/user/domain/user';

@InputType('CarpetFeatureUserDomain')
@ObjectType()
export class CarpetFeatureUser {
  @IDField(() => ID)
  id: number;

  @Field()
  carpetFeatureId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetFeature)
  carpetFeature: CarpetFeature;

  @Field(() => User)
  user: User;
}
