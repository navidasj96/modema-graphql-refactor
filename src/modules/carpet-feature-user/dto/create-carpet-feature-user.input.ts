import { Field, InputType } from '@nestjs/graphql';
import { CarpetFeature } from '@/modules/carpet-feature/domain/carpet-feature';
import { User } from '@/modules/user/domain/user';

@InputType('CreateCarpetFeatureUserInput')
export class CreateCarpetFeatureUserInput {
  @Field()
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
