import { CreateUserHasRoleInput } from './create-user-has-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserHasRoleInput extends PartialType(CreateUserHasRoleInput) {
  @Field(() => Int)
  id: number;
}
