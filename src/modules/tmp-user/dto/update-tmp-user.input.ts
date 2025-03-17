import { CreateTmpUserInput } from './create-tmp-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTmpUserInput extends PartialType(CreateTmpUserInput) {
  @Field(() => Int)
  id: number;
}
