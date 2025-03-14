import { CreateBasicCarpetBorderInput } from './create-basic-carpet-border.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetBorderInput extends PartialType(CreateBasicCarpetBorderInput) {
  @Field(() => Int)
  id: number;
}
