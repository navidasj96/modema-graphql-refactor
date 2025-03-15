import { CreateCarpetFeatureUserInput } from './create-carpet-feature-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetFeatureUserInput extends PartialType(CreateCarpetFeatureUserInput) {
  @Field(() => Int)
  id: number;
}
