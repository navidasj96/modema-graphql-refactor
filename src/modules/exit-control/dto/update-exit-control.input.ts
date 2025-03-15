import { CreateExitControlInput } from './create-exit-control.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExitControlInput extends PartialType(CreateExitControlInput) {
  @Field(() => Int)
  id: number;
}
