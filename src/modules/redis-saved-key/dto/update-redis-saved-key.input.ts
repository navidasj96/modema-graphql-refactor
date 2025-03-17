import { CreateRedisSavedKeyInput } from './create-redis-saved-key.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRedisSavedKeyInput extends PartialType(
  CreateRedisSavedKeyInput,
) {
  @Field(() => Int)
  id: string;
}
