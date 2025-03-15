import { CreateImageProductInput } from './create-image-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImageProductInput extends PartialType(CreateImageProductInput) {
  @Field(() => Int)
  id: number;
}
