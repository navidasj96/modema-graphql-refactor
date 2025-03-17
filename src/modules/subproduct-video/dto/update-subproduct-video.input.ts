import { CreateSubproductVideoInput } from './create-subproduct-video.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubproductVideoInput extends PartialType(CreateSubproductVideoInput) {
  @Field(() => Int)
  id: number;
}
