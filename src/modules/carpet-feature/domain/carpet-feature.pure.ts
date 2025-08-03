import { CarpetFeatureUserPure } from '@/modules/carpet-feature-user/domain/carpet-feature-user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetFeaturePureDomain')
@ObjectType()
export class CarpetFeaturePure {
  @Field(() => ID)
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

  @Field(() => [CarpetFeatureUserPure])
  carpetFeatureUsers: CarpetFeatureUserPure[];
}
