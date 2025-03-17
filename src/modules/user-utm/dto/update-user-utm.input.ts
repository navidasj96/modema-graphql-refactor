import { CreateUserUtmInput } from './create-user-utm.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserUtmInput extends PartialType(CreateUserUtmInput) {
  @Field(() => Int)
  id: number;
}
