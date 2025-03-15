import { CreateCarpetUsagePlaceInput } from './create-carpet-usage-place.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetUsagePlaceInput extends PartialType(CreateCarpetUsagePlaceInput) {
  @Field(() => Int)
  id: number;
}
