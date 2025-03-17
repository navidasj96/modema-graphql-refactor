import { CreateUserCartInput } from './create-user-cart.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserCartInput extends PartialType(CreateUserCartInput) {
  @Field(() => Int)
  id: number;
}
