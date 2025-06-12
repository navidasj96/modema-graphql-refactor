import { CreateReturnRequestItemVideoInput } from './create-return-request-item-video.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestItemVideoInput extends PartialType(
  CreateReturnRequestItemVideoInput
) {
  @Field(() => Int)
  id: number;
}
