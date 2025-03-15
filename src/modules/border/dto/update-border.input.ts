import { CreateBorderInput } from './create-border.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBorderInput extends PartialType(CreateBorderInput) {
  @Field(() => Int)
  id: number;
}
