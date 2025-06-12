import { CreateUserHasPermissionInput } from './create-user-has-permission.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserHasRoleInput extends PartialType(
  CreateUserHasPermissionInput
) {
  @Field(() => Int)
  id: number;
}
