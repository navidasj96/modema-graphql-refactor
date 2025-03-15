import { CreateImageSizeInput } from './create-image-size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImageSizeInput extends PartialType(CreateImageSizeInput) {
  @Field(() => Int)
  id: number;
}
