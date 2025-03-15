import { CreateExitControlItemInput } from './create-exit-control-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExitControlItemInput extends PartialType(CreateExitControlItemInput) {
  @Field(() => Int)
  id: number;
}
