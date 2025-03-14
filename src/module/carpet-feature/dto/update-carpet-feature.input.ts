import { CreateCarpetFeatureInput } from './create-carpet-feature.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetFeatureInput extends PartialType(CreateCarpetFeatureInput) {
  @Field(() => Int)
  id: number;
}
