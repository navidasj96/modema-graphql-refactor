import { CreateCity2Input } from './create-city2.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCity2Input extends PartialType(CreateCity2Input) {
  @Field(() => Int)
  id: number;
}
