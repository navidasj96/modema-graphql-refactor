import { CreateRussianInput } from './create-russian.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRussianInput extends PartialType(CreateRussianInput) {
  @Field(() => Int)
  id: number;
}
