import { CreateNeedsPhotographySubproductInput } from './create-needs-photography-subproduct.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNeedsPhotographySubproductInput extends PartialType(CreateNeedsPhotographySubproductInput) {
  @Field(() => Int)
  id: number;
}
