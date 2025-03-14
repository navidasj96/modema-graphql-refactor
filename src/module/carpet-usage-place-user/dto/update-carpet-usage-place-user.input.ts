import { CreateCarpetUsagePlaceUserInput } from './create-carpet-usage-place-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarpetUsagePlaceUserInput extends PartialType(CreateCarpetUsagePlaceUserInput) {
  @Field(() => Int)
  id: number;
}
