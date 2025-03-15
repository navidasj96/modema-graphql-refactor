import { CreateImageSubproductInput } from './create-image-subproduct.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImageSubproductInput extends PartialType(CreateImageSubproductInput) {
  @Field(() => Int)
  id: number;
}
