import { CreateAttributeAttributeGroupInput } from './create-attribute-attribute-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeAttributeGroupInput extends PartialType(CreateAttributeAttributeGroupInput) {
  @Field(() => Int)
  id: number;
}
