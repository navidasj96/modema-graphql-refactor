import { CreateSubproductInput } from './create-subproduct.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubproductInput extends PartialType(CreateSubproductInput) {
  @Field(() => Int)
  id: number;
}
