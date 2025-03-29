import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CarpetFeatureUser } from '@/modules/carpet-feature-user/domain/carpet-feature-user';

@InputType('CarpetFeatureDomain')
@ObjectType()
export class CarpetFeature {
  @IDField(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CarpetFeatureUser])
  carpetFeatureUsers: CarpetFeatureUser[];
}
