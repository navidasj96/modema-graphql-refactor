import { CreateTorobProductInput } from './create-torob-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTorobProductInput extends PartialType(CreateTorobProductInput) {
  @Field(() => Int)
  id: number;
}
