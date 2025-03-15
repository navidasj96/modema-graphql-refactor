import { CreateNewBorderInput } from './create-new-border.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNewBorderInput extends PartialType(CreateNewBorderInput) {
  @Field(() => Int)
  id: number;
}
