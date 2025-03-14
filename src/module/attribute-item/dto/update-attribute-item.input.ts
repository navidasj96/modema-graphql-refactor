import { CreateAttributeItemInput } from './create-attribute-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeItemInput extends PartialType(CreateAttributeItemInput) {
  @Field(() => Int)
  id: number;
}
