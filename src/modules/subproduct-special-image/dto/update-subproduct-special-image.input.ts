import { CreateSubproductSpecialImageInput } from './create-subproduct-special-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubproductSpecialImageInput extends PartialType(CreateSubproductSpecialImageInput) {
  @Field(() => Int)
  id: number;
}
