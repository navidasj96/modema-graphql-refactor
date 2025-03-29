import { Field, InputType } from '@nestjs/graphql';
import { CarpetFeatureUser } from '@/modules/carpet-feature-user/domain/carpet-feature-user';

@InputType('CreateCarpetFeatureInput')
export class CreateCarpetFeatureInput {
  @Field()
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
