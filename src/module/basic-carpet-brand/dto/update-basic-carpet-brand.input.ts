import { CreateBasicCarpetBrandInput } from './create-basic-carpet-brand.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetBrandInput extends PartialType(CreateBasicCarpetBrandInput) {
  @Field(() => Int)
  id: number;
}
