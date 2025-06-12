import { CreateTmpRussiaProductInput } from './create-tmp-russia-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTmpRussiaProductInput extends PartialType(
  CreateTmpRussiaProductInput
) {
  @Field(() => Int)
  id: number;
}
