import { CreateAttributeSubproductInput } from './create-attribute-subproduct.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttributeSubproductInput extends PartialType(CreateAttributeSubproductInput) {
  @Field(() => Int)
  id: number;
}
