import { CreateReturnRequestItemImageInput } from './create-return-request-item-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestItemImageInput extends PartialType(CreateReturnRequestItemImageInput) {
  @Field(() => Int)
  id: number;
}
