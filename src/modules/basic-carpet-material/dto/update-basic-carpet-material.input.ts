import { CreateBasicCarpetMaterialInput } from './create-basic-carpet-material.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetMaterialInput extends PartialType(CreateBasicCarpetMaterialInput) {
  @Field(() => Int)
  id: number;
}
