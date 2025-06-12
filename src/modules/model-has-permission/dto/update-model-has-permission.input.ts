import { CreateModelHasPermissionInput } from './create-model-has-permission.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateModelHasPermissionInput extends PartialType(
  CreateModelHasPermissionInput
) {
  @Field(() => Int)
  id: number;
}
