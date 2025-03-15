import { CreateModelHasRoleInput } from './create-model-has-role.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModelHasRoleInput extends PartialType(CreateModelHasRoleInput) {
  @Field(() => Int)
  id: number;
}
