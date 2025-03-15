import { CreateAttributeGroupInput } from './create-attribute-group.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeGroupInput extends PartialType(
  CreateAttributeGroupInput,
) {
  @Field(() => Int)
  id: number;
}
